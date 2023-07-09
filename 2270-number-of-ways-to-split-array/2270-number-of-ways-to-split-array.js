/**
 * @param {number[]} nums
 * @return {number}
 */

//using prefix sum method:

var waysToSplitArray = function(nums) {
    let ans = 0, leftSection = 0, total = 0;
    
    for (const num of nums) {
        total += num;
    }
    
    for (let i = 0; i < nums.length - 1; i++) {
        leftSection += nums[i];
        let rightSection = total - leftSection;
        if (leftSection >= rightSection) {
            ans++;
        }
    }
    
    return ans;
};
// time: O(n), we can calculate the sums of the left and right sections in O(1)
//space: O(1), no prefix array needed