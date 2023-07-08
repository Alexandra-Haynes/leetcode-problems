/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let left=0, right=k, sum=0, average=0, max=0;
    
    
    for(let i=0; i<k; i++){
        sum+=nums[i]
    }
    average=sum/k;
    max=average;
    
    
    while(right < nums.length){
        sum+=nums[right];
        sum-=nums[left];
        average=sum/k;
        max=Math.max(max, average)
        left++;
        right++;
 }
    return max
};