/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    //using sliding window technique:
    let left=0;
    let right=k;
    let average=0;
    let sum=0;
    let max=0;
    
    for(let i=0; i<k; i++){
        sum+=nums[i]
    }
        average=sum/k;
        max=average
        
        while(right < nums.length){
            sum+=nums[right];
            sum-=nums[left]
            average=sum/k;
            max=Math.max(max,average);
            left++;
            right++;
        }
       
    return max
};