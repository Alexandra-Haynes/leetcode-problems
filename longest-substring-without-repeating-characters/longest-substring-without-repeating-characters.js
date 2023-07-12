/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let max=0
    let start=0
    let chMap = new Map()
    
    for(let end=0; end<s.length; end++){
        const c=s[end]
        
        if(chMap.has(c) && chMap.get(c) >= start){
            start = chMap.get(c) + 1
        }
        
        chMap.set(c, end)
        
        const curr = end-start+1
        max=Math.max(max, curr)
}
    return max
    
};