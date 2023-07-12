/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
  
    //use a hash map to store the frequency of each num
    let freqMap = new Map()
    
    for(let num of arr) {
        freqMap.set(num, (freqMap.get(num) || 0) +1)
    }
    
    //add all frequencies in a set
    
    let freqSet = new Set()
    
    for( const [key, value] of freqMap) {
        
        freqSet.add(value)
    }
    
    //number of occurrences of each value is unique => the size of freqSet = number of unique elements in the arr
    return freqSet.size === freqMap.size
    
};


//time:O(n), we iterate through the array twice: once to count the frequencies and once to check if the frequencies are unique
//space:O(n), the worst case: all elements in arr are distinct, the map and set would store all the numbers