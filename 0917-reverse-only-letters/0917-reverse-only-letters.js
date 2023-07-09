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

  return arr.join('');
}

function isLetter(ch) {
  let code = ch.charCodeAt(0);
  return (code >= 65 && code <= 90) || (code >= 97 && code <= 122);
}
