/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
    
    //creating a set with all English letters
    let alphabet = new Set("abcdefghijklmnopqrstuvwxyz")
    
    //iterating through all letters in sentence
    for (const letter of sentence) {
        //deleting it from the alphabet
        alphabet.delete(letter)
    }
    
    //is there any letters we haven't seen
    return alphabet.size === 0;
}


//time:O(n), we iterate through sentence once, O(n). Deleting letters in a set takes O(1)
//space: O(1), alphabet size is constant, not exceeding 26 letters