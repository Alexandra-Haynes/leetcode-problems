/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var getAverages = function(nums, k) {
    
    const n=nums.length
     //array of size n initialized with -1s  
    const averages=new Array(n).fill(-1)  
    
    if(k===0) return nums;
    
    //if we don't have k elements left and right
     if (2 * k + 1 > n) {
        return averages;
    }
    
    //generate prefix array
    const prefix=new Array(n+1).fill(0)
    for (let i = 0; i < n; ++i) {
        prefix[i + 1] = prefix[i] + nums[i];
    }
    
    //iterate only i that have k elem left and right
    
    for(let i=k; i<(n-k); i++){
      const left=i-k
      const right=i+k
      const subarrSum = prefix[right+1]-prefix[left]
      const average=Math.floor(subarrSum/(2*k+1))
      averages[i]=average
      }
    return averages
    
};

//time: O(n)
//space: O(n), we used additional array prefix of size n+1