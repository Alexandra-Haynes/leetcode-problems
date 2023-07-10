/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let map = new Map;
    for(let i=0; i<nums.length; i++){
       let current=nums[i]
       //current + x = target
       //x = target -  current
       let x = target-current
       if(map.has(x)){
           return [map.get(x), i]
       }
       //if false, we store the value
       map.set(nums[i], i)
    }
    
    //if we don't find a valid pair
    return [-1,-1]

};

//Time: O(n), the hash map operations are O(1)
//Space: O(n), the number of keys the hash map will store scales linearly with the input size 