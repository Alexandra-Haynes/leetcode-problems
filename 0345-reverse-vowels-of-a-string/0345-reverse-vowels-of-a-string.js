/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
  
     const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
    let chars = s.split('');
    
    let i = 0;
    let j = chars.length - 1;
    
    while(i < j) {
        while(i < j && !vowels.has(chars[i])) {
            i++;
        }
        
        while(i < j && !vowels.has(chars[j])) {
            j--;
        }
        
        if(i < j) {
            [chars[i], chars[j]] = [chars[j], chars[i]];
            i++;
            j--;
        }
    }
    
    return chars.join('');
};







