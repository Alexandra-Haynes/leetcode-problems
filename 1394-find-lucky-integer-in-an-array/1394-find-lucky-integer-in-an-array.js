/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function(arr) {
    
  const freqMap = new Map() //tracks the frequency of each num

  //count the frequency of each number
  for (const num of arr) {
    freqMap.set(num, (freqMap.get(num) || 0) + 1)
  }

  let largestLucky = -1

  //find the largest lucky integer
  for (const [num, freq] of freqMap) {
    if (num === freq && num > largestLucky) {
      largestLucky = num
    }
  }

  return largestLucky
};

//time complexity: O(n), iterates through the array twice: once to count the frequencies and once to find the largest lucky integer
//space complexity: O(n), the worst case: all elements in arr are distinct => map stores all the numbers