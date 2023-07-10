/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    
  const n = nums.length;
  const numSet = new Set(nums)
  //we are using a Set because of its efficient lookup, O(1) time complexity
  for (let i = 0; i <= n; i++) {
    if (!numSet.has(i)) {
      return i
    }
  }

  return -1 // default return value, if no missing number is found 
}

//time: O(n)
//space: O(n)