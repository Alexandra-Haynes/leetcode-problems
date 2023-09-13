/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const n = nums.length
    const left = new Array(n).fill(1)
    const right = new Array(n).fill(1)
    const result = new Array(n)

    for(let i = 1; i < n; i++) {
        left[i] = left[i-1] * nums[i-1]
    }

    for(let j = n-2; j >= 0; j--) {
        right[j] = right[j+1] * nums[j+1]
    }

    for(let i = 0; i < n; i++) {
        result[i] = left[i] * right[i]
    }

    return result
};







