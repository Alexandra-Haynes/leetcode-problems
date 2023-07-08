/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(nums, k) {
    let left=0;
    let max=0;
    let zeroCount=0;
    
    for(let right=0; right< nums.length; right++){
         
        if(nums[right]===0) zeroCount++
        
        while(zeroCount > k){
            if(nums[left]===0) zeroCount--
            left++;
            
       }
        
        const currentLength=right-left+1;
        max=Math.max(max, currentLength)
    }
    
    return max
};