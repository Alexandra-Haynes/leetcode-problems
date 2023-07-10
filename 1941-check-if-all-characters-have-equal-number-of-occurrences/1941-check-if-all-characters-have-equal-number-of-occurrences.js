/**
 * @param {string} s
 * @return {boolean}
 */
var areOccurrencesEqual = function(s) {
    //approach: because a set ignores duplicates, we can put all the frequencies in a set 
    //and check if the length is 1 to verify if the frequencies are all the same
    
    //creating the hash map for each character and its frequency value
    let counts = new Map()
    for (const ch of s) {
        counts.set(ch, (counts.get(ch) || 0) + 1)
    }
    
    // store unique values in a set
    let frequencies = new Set()
    for (const val of counts.values()) {
        frequencies.add(val)
    }
    
    //if all frequencies have the same value => set's size will be 1
    return frequencies.size == 1
}

// time: O(n), the cost of populating the map,+ O(n) to convert the map's values to a set, resulting in a linear time complexity
// space: O(1), because the English alphabet is bounded by a constant 26 letters, 
               //or O(k), k-the number of characters that could be in the input