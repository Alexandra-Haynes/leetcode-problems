/**
 * @param {string} s
 * @return {character}
 */
var repeatedCharacter = function(s) {
    let seen = new Set()
    for (const ch of s) {
        if (seen.has(ch)) {
            return ch
        }
        seen.add(ch)
    }
    
    return " "
}

//time complexity: O(n), each for loop iteration runs in constant time
//space complexity: O(1), because the input can only have characters from the English alphabet, which is bounded by a constant (26)
                    //but it can also be considered to be O(m), where m is the number of allowable characters in the input