/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    //using two pointers technique:
    let left=0;
    let right=s.length-1;

    while(left<right){
        if(!isAlphaNumeric(s[left]) ) {
            left++;
        } else if(!isAlphaNumeric(s[right]) ) {
            right--;
        } else if (s[left].toLowerCase() !== s[right].toLowerCase()){
            return false;
        } else {
            left++;
            right--;
        }
    }
    return true;
};

//helper function that checks if the character is a letter or a number
//using ASCII codes

function isAlphaNumeric(char) {
  const code=char.charCodeAt(0);
    //index 0 because char is expected to be a single character
  return (
   (code >=48 && code <=57) ||  //0-9
   (code >= 65 && code <= 90) || //A-Z
   (code >= 97 && code <= 122))  //a-z
}


//Time: O(n)
//Space: O(1)