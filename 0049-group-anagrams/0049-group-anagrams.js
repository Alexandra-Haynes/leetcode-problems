/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    //if two strings are anagrams => when sorted they are equal
    
    //we will use a hashmap to store the sorted version as a key,
    //and the groups of anagrams as values
    
    let groups = new Map()
    
    for(const s of strs) {
        let key = s.split('').sort().join('')
        if(!groups.get(key)) {
            groups.set(key,[])
        }
        
        groups.get(key).push(s) //add that string in its group
    }
    
    let ans=[]
    
    for(const group of groups.values()) {
        ans.push(group)
    }
    return ans
};