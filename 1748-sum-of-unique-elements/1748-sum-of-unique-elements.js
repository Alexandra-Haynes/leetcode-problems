/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function(nums) {
    
    // keeping track of the frequency of each num
    let numCount=new Map()
    let sum=0
    
    for(const num of nums) { 
       numCount.set(num, (numCount.get(num) || 0) +1)
    }
    
    for(const [num, count] of numCount) {
        //if num appears only once => it's unique => add it to sum
        if(count===1) sum+=num
    }
    
    return sum
};

//time complexity: O(n), we iterate through the array twice: once to count the occurrences and once to calculate the sum of unique elements
//space complexity: O(n), numCount map stores the count of each number. In the worst case, all elements in nums are distinct and the map would store all the numbers.