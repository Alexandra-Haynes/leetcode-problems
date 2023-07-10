/**
 * @param {number[][]} nums
 * @return {number[]}
 */
var intersection = function(nums) {
  const n = nums.length
  const numCount = new Map()
  const result = []
  
   //count occurrences of numbers in each array
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < nums[i].length; j++) {
      const num = nums[i][j]
      numCount.set(num, (numCount.get(num) || 0) + 1)
    }
  }
    
    //add numbers with count equal to n to the result array
  for (const [num, count] of numCount) {
    if (count === n) {
      result.push(num)
    }
  }
    
    //sort the result array
  result.sort((a, b) => a - b)

  return result
}


//time complexity: O(n*m), due to looping through each array (n) and each element within the arrays (m)
//space complexity: O(k), k = the number of unique numbers across all arrays in the nums. 
                   //in the worst case, all numbers are unique and occur only once