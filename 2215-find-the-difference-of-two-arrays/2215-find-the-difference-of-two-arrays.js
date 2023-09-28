/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
  
   const set1 = new Set(nums1)
  const set2 = new Set(nums2)

  const answer = []

  answer[0] = [...set1].filter(num => !set2.has(num))
  answer[1] = [...set2].filter(num => !set1.has(num))

  return answer
}