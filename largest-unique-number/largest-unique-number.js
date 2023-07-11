/**
 * @param {number[]} nums
 * @return {number}
 */
var largestUniqueNumber = function(nums) {
  const frequency = new Map()
    
     //count the frequency of each integer
  for (const num of nums) {
    frequency.set(num, (frequency.get(num) || 0) + 1)
  }
    
    //initialize max with -1
    let largestUnique = -1
    
     //find the largest integer that occurs only once
  for (const [num, count] of frequency) {
    if (count === 1 && num > largestUnique) {
      largestUnique = num
    }
  }

  return largestUnique 
};