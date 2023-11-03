/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if (nums.length <= 2) {
        return nums.length
    }
    
    let count = 1
    let current = nums[0]
    let index = 1
    
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] === current) {  
            count++
        } else {
            count = 1
            current = nums[i]
        }
        
        if (count <= 2) {
         
            nums[index] = nums[i]
            index++
        }
    }
    
    return index
}