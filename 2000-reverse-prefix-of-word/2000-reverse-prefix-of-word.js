/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */


 //we will use the two pointers technique

var reversePrefix = function(word, ch) {
       
          let left=0;
          let right=word.indexOf(ch)
       
       //if ch not found or word is the character itself
       if(right <0 || word == ch ) return word
       
        // Convert word to an array, because strings are immutable
       let wordArray = Array.from(word);

       while(left < right){
          let temp = wordArray[left];
          wordArray[left] = wordArray[right];
          wordArray[right] = temp;
         left++
         right--
        }
    // Convert the array back to a string
     return wordArray.join('');
};