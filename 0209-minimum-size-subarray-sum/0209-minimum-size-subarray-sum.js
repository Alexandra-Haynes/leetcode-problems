/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    
  //using the sliding window technique
  let left = 0
  let right = 0
  let currSum = 0
  let min = Infinity; //any valid subarray length will be smaller and replace the initial value of min

  while (right < nums.length) {
    currSum += nums[right]
    right++

    while (currSum >= target) {
      min = Math.min(min, right - left)
      currSum -= nums[left]
      left++
    }
  }

  return min === Infinity ? 0 : min
};

//time: O(n)
//space: O(1)