/**
 * @param {number[]} arr
 * @return {number}
 */
var countElements = function(arr) {
    let numSet= new Set(arr)
    let count=0
    
    for(let i=0; i<arr.length;i++){

     if(numSet.has(arr[i]+1)) count ++
    }
    
    return count
};