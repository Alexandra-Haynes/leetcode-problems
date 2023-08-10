/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function(word1, word2) {
    
    //strings need to have the same length
     if (word1.length !== word2.length) {
        return false
    }

    // get ch counts of a string
    
    const getChCounts = (word) => {
        const counts = {}
        for (const ch of word) {
            counts[ch] = (counts[ch] || 0) + 1
        }
        return counts
    };

    const counts1 = getChCounts(word1)
    const counts2 = getChCounts(word2)

    // check if ch in word1 and word2 are the same
    
    if (Object.keys(counts1).sort().join('') !== Object.keys(counts2).sort().join('')) {
        return false
    }

    // check if the sorted freq of ch in word1 = sorted freq of ch in word2
   
    if (Object.values(counts1).sort().join('') !== Object.values(counts2).sort().join('')) {
        return false
    }

    return true
}

//time complexity: sorting takes O(n logn)
//space complexity: O(n)