/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    //we use a set to keep track of unique numbers encountered 
    let numSet = new Set()
    
    for(let num of nums) {
    //if the current element is already present in the setg => true
        if(numSet.has(num)) return true
        numSet.add(num)
    }
    //every number is unique => false
    return false
};

//time complexity: O(n), we iterate through nums array once and check in the same iteration
//space complexity: O(n), worst case all elems are distinct and numSet size = nums.length