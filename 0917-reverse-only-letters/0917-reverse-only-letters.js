/**
 * @param {string} s
 * @return {string}
 */

 //two pointers:


function reverseOnlyLetters(s) {
    
  let left = 0;
  let right = s.length - 1;
    //convert to arr for easier swapping
  let arr = Array.from(s);

  while (left < right) {
      //if both letters, swap them
    if (isLetter(arr[left]) && isLetter(arr[right])) {
      let temp = arr[left];
      arr[left] = arr[right];
      arr[right] = temp;
      left++;
      right--;
    //if one of the ch is not letter, we skip it
    } else {
      if (!isLetter(arr[left])) {
        left++;
      }
      if (!isLetter(arr[right])) {
        right--;
      }
    }
  }

    //convert array back to a string
  return arr.join('');
}

//helped function to check if ch is a letter
function isLetter(ch) {
  let code = ch.charCodeAt(0);
  return (code >= 65 && code <= 90) //A-Z
    || (code >= 97 && code <= 122) //a-z
}

//time: O(n)
//space: O(n), due to arr
