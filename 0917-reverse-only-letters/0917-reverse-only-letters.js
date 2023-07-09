/**
 * @param {string} s
 * @return {string}
 */

 //two pointers:

const regex = /^[a-zA-Z]$/;
var reverseOnlyLetters = function(s) {
    let output = '';
    let cursorS = 0;
    let cursorReverse = s.length - 1;
    
    while (cursorS < s.length) {
        if (!regex.test(s[cursorReverse]) && cursorReverse >= 0) {
            cursorReverse--;
            continue;
        }
        if (regex.test(s[cursorS])) {
            output += s[cursorReverse];
            cursorReverse--;
        } else {
            output += s[cursorS];
        }
        cursorS++;
    }
    
    return output;
};