/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    
    //we'll be mapping a char from the pattern to a word in s
    
    const words = s.split(' ') //get individual words
    if(pattern.length !== words.length) return false 
    
    let patternMap = {}
    let wordMap = {}
    
    for(let i=0; i < pattern.length; i++) {
        const ch = pattern[i]
        const word = words[i]
        
        
        //for each ch in pattern, if it exists in the map, its value should match words[i]
        
     if (patternMap.hasOwnProperty(ch) && patternMap[ch] === word) {
            // The character is already mapped to the word
        } else if (!patternMap.hasOwnProperty(ch)) {
            patternMap[ch] = word;
        } else {
            return false;
        }

        if (wordMap.hasOwnProperty(word) && wordMap[word] === ch) {
            // The word is already mapped to the character
        } else if (!wordMap.hasOwnProperty(word)) {
            wordMap[word] = ch;
        } else {
            return false;
        }
    }
    
    return true
};

/*

OBS: just checking  if(patternMap[ch]) returns wrong answer is the word 'constructor' exists in string => needed to use patternMap.hasOwnProperty(ch) to avoid it
time complexity: O(n)
space complexity: O(n), the worst case: each ch in pattern and each word in s are unique => maps have size of n

*/