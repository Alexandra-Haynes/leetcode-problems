/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function(nums, k) {
    let count = 0
    let map = {}
    
    for (let num of nums) {
        
        if (map[k - num] > 0) {
            count++
            map[k - num]--
        } else {
     
            map[num] = (map[num] || 0) + 1
        }
    }
    
    return count
}