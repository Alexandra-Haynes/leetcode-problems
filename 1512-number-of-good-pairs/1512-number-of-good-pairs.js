/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
    
    let pairs=0
    let pairMap = new Map()
    
    //hash map to store the frequency of each num
    for(let i=0; i< nums.length;i++) {
        pairMap.set(nums[i], (pairMap.get(nums[i])||0)+1)
    }
    
    //check nums that occur more than once
    for (const freq of pairMap.values()) {
       if (freq > 1) {
        pairs += (freq * (freq - 1)) / 2 
           //freq * (freq - 1) - the total number of pairs that can be formed 
           // eliminates the duplication, counting the same pair twice
    }
  }
    
    return pairs
};

//time complexity: O(n), we iterate through the array twice: once to count the frequencies and once to calculate the number of good pairs

//space complexity: O(n), the map stores the frequencies of each number. In the worst case: all elements in nums are distinct => the map would store all the numbers