/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(nums, k) {
    //using sliding window technique:
    let left=0;
    let max=0;
    let zeroCount=0; //zeros inside the window

for(let right=0; right< nums.length; right++){
    
    if(nums[right]===0) zeroCount++
    
    while(zeroCount > k){
        //shrink the window:
        if(nums[left]===0) zeroCount--;
        left++
       }
    
    //update max if we found a greater length
     const currentLength = right-left+1;
    max=Math.max(max, currentLength)
    }
return max;

};