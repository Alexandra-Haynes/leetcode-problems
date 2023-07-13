/**
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 */
var numSubarraysWithSum = function(nums, goal) {
  let count = 0
  let sum = 0
  
  //using the two pointers method
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