/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

//using the two pointer technique

var moveZeroes = function(nums) {
    
    let left=0 
    let right=0
    
    //move all  non-zero elem to the left side
    
    while (right< nums.length) {
        if(nums[right] !==0) {
            nums[left] = nums[right]
            left++
        }
        right++
    }
    
    //fill the remaining with zero
    
    while(left < nums.length) {
        nums[left] = 0
        left++
    }
};


//time: O(n), we iterate through the array once with two pointers
//space: O(1), modifying the input array in place