/**
 * @param {number[]} nums
 * @return {number}
 */
var minStartValue = function(nums) {
    let min=0
    let total=0
    
    for(let i=0; i< nums.length; i++){
       total+=nums[i]
        //keeping track of the lowest sum encountered so far:
        min=Math.min(min, total)
    }
    
    //sum is never less than 1
    //min+startValue=1 => startValue = 1-min
    
    startValue= 1-min
    return startValue
};

//time: O(n)
//space: O(1)