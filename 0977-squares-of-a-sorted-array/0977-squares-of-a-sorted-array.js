/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    //using 2 pointers technique:
    let left=0;
    let right=nums.length -1;
    
    let output=[]
    
    
    for(let i=nums.length-1; i>=0; i--){
        let square;
         if(Math.abs(nums[left]) < Math.abs(nums[right])) {
             square=nums[right];
             right--;
         } else {
             square=nums[left];
             left++;
         }
        output[i]= square * square
    }
    return output;
 }
