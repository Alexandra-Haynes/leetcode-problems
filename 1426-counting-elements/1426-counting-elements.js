/**
 * @param {number[]} arr
 * @return {number}
 */
var countElements = function(arr) {
    let arrSet = new Set(arr)
    let count=0
    
    for(let i=0; i<arr.length;i++){
        if(arrSet.has(arr[i]+1)) count++
    }
    
    return count
};

//time: O(n)
//space: O(n)