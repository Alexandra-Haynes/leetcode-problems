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
    
    //add all the groups in a final array
    let ans=[]
    for(const group of groups.values()) {
        ans.push(group)
    }
    return ans
};

//time complexity: O(n⋅m⋅logm), where n=length of strs and m=the average length of the strings
//                  we iterated over each string and sort it, which costs O(n⋅m⋅logm)
//                  then, we iterated over the keys, worst case scenario:no matching anagrams => n groups => O(n)
//space complexity: O(n⋅m), each string will be placed in an array within the hash map             