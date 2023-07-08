/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    let i=0; 
    let j=s.length-1;
    while(i<j){
        let temp1=s[i]
        let temp2=s[j]
        s[i]=temp2
        s[j]=temp1
        i++
        j--
    }
    return s
};