/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

 //using the two pointers technique:

var isSubsequence = function(s, t) {
   let i=0; j=0;
   while (i<s.length && j<t.length) {
       if(s[i]===t[j]) {
           i++;
       } 
           j++;
       }
   
   //we found i letters that match
   return i===s.length; 
};