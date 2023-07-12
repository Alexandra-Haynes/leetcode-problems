/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    
    //will use hash maps to store all letters and their frequencies
    
    let ransomMap = new Map()
    let magazineMap = new Map()
    
    //populate magazine map with each ch and its frequency
    
    for(let i=0; i<magazine.length;i++){
        const ch = magazine[i]   
        magazineMap.set(ch, (magazineMap.get(ch) || 0) + 1)
    }
    
    //check if ransomNote can be build
    
    for(let i=0; i< ransomNote.length; i++) {
        const ch = ransomNote[i]
        
        //if the ch doesn't exist in magazineMap or the count is 0 => return false
        
        if(!magazineMap.has(ch) || magazineMap.get(ch) === 0) return false
    
        //update the count of ch  in ransomMap
        
        ransomMap.set(ch, (ransomMap.get(ch) || 0) + 1)
                      
      //in the same time, decrease the count in the magazineMap
        magazineMap.set(ch, magazineMap.get(ch)  - 1)
    }
    
    //  if we got this far it means that all characters in ransomNote can be constructed from magazine
 
    return true
};

//time complexity: O(m+n), depending on the length of the two strings. We iterated over both string once to populate the hash maps

//space complexity: O(m+n), in the worst case, all ch are distinct, so both maps will store all the ch