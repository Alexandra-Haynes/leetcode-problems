/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
  let count = 0 //the number of subarrays with sum equal to k
  let sum = 0   //the current prefix sum 
  
  const sumMap = new Map() //the frequency of each prefix sum encountered
  sumMap.set(0, 1) //edge case, empty prefix [] has a sum of 0

   for (const num of nums) {
        sum += num 
       //because the array can have negative numbers, the same prefix can occur multiple times.
       //we use the hash map to track how many times a prefix has occurred
        count += sumMap.get(sum - k) || 0
       //frequency of sum - k is equal to the number of subarrays whose sum is equal to k that end at index
        sumMap.set(sum, (sumMap.get(sum) || 0) + 1)
    }
  
  return count
}

//time and space complexity: O(n)