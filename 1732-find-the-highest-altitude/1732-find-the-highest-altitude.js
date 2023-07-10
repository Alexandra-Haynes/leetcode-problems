/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    
    const n=gain.length
    const prefix = [0]
    let max = 0 //highest altitude
    
    for(let i=0; i<n; i++) {
        //calculate prefix sum
        prefix[i+1] = prefix[i] + gain[i] 
        
        //update max if current is higher
        if(prefix[i+1] > max) {
            max=prefix[i+1]
        }
    }
    
    return max
}

//time complexity: O(n), we iterated over gain array once
//space complexity: O(n), we created an additional array, prefix

