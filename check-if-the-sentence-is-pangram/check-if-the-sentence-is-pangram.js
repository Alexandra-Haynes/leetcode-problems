/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
   let alphabet = new Set("abcdefghijklmnopqrstuvwxyz");
    
    for(const letter of sentence) {
        alphabet.delete(letter)
    }
    
    return alphabet.size === 0
};