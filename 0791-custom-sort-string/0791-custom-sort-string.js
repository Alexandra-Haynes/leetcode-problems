/**
 * @param {string} order
 * @param {string} s
 * @return {string}
 */
var customSortString = function(order, s) {
     let countMap = {}
    let result = ''
    
   
    for (let char of s) {
        if (countMap[char]) {
            countMap[char]++
        } else {
            countMap[char] = 1
        }
    }

    
    for (let char of order) {
        while (countMap[char] > 0) {
            result += char
            countMap[char]--
        }
    }
    
    
    for (let char in countMap) {
        while (countMap[char] > 0) {
            result += char
            countMap[char]--
        }
    }
    
    return result
};


//time complexity:  O(n+m), which can be aproximated to O(n), because m, the length of order, can go up to 26 (all lowercase English letters)
//space complexity: O(n),  hashmap stores the count of characters in s