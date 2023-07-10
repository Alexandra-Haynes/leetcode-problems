/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function(s, k) {
    //sliding window method
    let left=0
    let right=0
    let max=0  
    let curr=0 //current vowels count
    let vowels=['a', 'e', 'i', 'o', 'u']
    
    while(right < s.length) {
        if(vowels.includes(s[right])) curr++
        right++
        
        if(right-left == k) {
            max=Math.max(max, curr)
            if(vowels.includes(s[left])) curr--
            left++
        }
    }
    
    return max
    
};

//time: O(n)
//space: O(1)