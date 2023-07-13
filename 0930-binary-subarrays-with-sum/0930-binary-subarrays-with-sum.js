/**
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 */
var numSubarraysWithSum = function(nums, goal) {
  let count = 0
  let sum = 0
  let left = 0
  let right = 0
  
  while (right < nums.length) {
    sum += nums[right]
    
    while (left < right && sum > goal) {
      sum -= nums[left]
      left++
    }
    
    if (sum === goal) {
      count++ 
        
  //after finding a subarray with a sum equal = goal => check if there are 
  //any additional contiguous zeros within that subarray
        
      let tempLeft = left
      while (tempLeft < right && nums[tempLeft] === 0) {
        count++
        tempLeft++
      }
    }
    right++
  }
  
  return count
}

//time:O(n), we iterate through the array once using the two pointers
//space: O(1),  constant amount of extra space, regardless of the input size
