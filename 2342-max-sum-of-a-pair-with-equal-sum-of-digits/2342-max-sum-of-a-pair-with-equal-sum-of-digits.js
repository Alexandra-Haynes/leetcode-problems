/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumSum = function(nums) {
    
    //function to calculate the digit sum for each number
      let getDigitSum = num => {
        let digitSum = 0
        while (num > 0) {
            digitSum += num % 10
            num = Math.floor(num / 10)
        }
        return digitSum
    }
    
      
    //creating a hash map to store key=digitSum, value=
    let dic = new Map()
    let ans = -1
    
    
   
    for (const num of nums) {
        let digitSum = getDigitSum(num)
         //for each number num, we check if there is another number with the same digit sum in the map
        if (dic.has(digitSum)) { //if there is, we calculate the sum
            ans = Math.max(ans, num + dic.get(digitSum))
            //saving the largest number seen so far for each digit sum - improved time and space complexity
        }
        
        
        dic.set(digitSum, Math.max(dic.get(digitSum) || 0, num))
        //updating the map to store the largest number encountered so far for that specific digit sum
    }
    
    
    return ans
}

//time: O(n*k), k- maximum number of digits in the elements of the array
//space: O(n), the hash map stores the largest number encountered for each digit sum