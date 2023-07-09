/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var getAverages = function(nums, k) {
    
    const n=nums.length
    
    const averages=new Array(n).fill(-1)
    
    if(k===0) return nums;
    
    if(2*k+1 > n) return averages;
    
    const prefix=new Array(n+1).fill(0)
    
    for(let i=0; i<n; i++){
        prefix[i+1]=prefix[i] + nums[i]
      }
    
    for(let i=k; i<(n-k); i++){
        const left = i-k;
        const right=i+k;
        const sum = prefix[right+1] - prefix[left]
        const average=Math.floor(sum/(2*k+1))
        averages[i] = average
    }
    
    return averages
    
};