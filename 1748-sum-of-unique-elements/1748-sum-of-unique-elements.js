/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function(nums) {
    
    
    let numCount=new Map()
    let sum=0
    
    for(const num of nums) { 
       numCount.set(num, (numCount.get(num) || 0) +1)
    }
    
    for(const [num, count] of numCount) {
        if(count===1) sum+=num
    }
    
    return sum
};