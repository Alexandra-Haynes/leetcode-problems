/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumUniqueSubarray = function(nums) {
  
    let unique = new Set()
  let left = 0, right=0 //sliding window
  
  let maxScore = 0
  let currScore = 0

  while (right < nums.length) {
    if (!unique.has(nums[right])) {
      unique.add(nums[right])
      currScore += nums[right]
      right++
    } else {
      unique.delete(nums[left])
      currScore -= nums[left]
      left++
    }

    maxScore = Math.max(maxScore, currScore)
  }

  return maxScore
    
}

//time: O(n), we iterate through the array once using the sliding window technique
//space: O(n), the worst case: the entire array is unique => store all the elements in the unique set