/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  //sliding window = current substring without repeating characters
    
    let maxLength=0
    let start=0 //the start index of the current substring
    
    const chMap=new Map() //hash map to store the most recent index of each ch seen
    
//we iterate through the string from left to right
    for (let end = 0; end < s.length; end++) {
        const ch = s[end]
        if(chMap.has(ch) && chMap.get(ch) >= start)
    //explanation: if the character is a repeat and its index >= start index => the repeat character falls within the current substring and needs to be excluded from the next substring
    //if ch is in the substring, update the pointer
            start = chMap.get(ch) + 1 //to maintain a string without repeating ch
        
        chMap.set(ch, end)
        const currLength = end-start+1 //length of window
        maxLength=Math.max(maxLength, currLength)
    }
    return maxLength;
};


//time: O(n), n-size of s string
//space: O(1), chMap < s length, if the input string only contains            lowercase English letters, the size of the character set            would be 26
