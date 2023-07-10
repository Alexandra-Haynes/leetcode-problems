/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    
    //using the prefix sum method:
    const prefix=[0]
    
    //calculate prefix sum
    for(let i=0; i< nums.length; i++){
        prefix[i+1] = prefix[i] + nums[i]
    }
    
    //find the pivot index
     for(let i=0; i< nums.length; i++){   
        const leftSum = prefix[i]
        const rightSum = prefix[nums.length] - prefix[i+1]
        
        if(leftSum === rightSum) {
            return i
        }
     }
    //no pivot found
    return -1
}

//time complexity: O(n), we iterated over nums array twice
      //once to calculate the prefix sum and once to find the pivot index
//space complexity: O(n), we created an additional array, prefix