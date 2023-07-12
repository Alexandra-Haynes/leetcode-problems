/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function(arr) {
    
    let max=-1
    
    let arrMap=new Map()
    
    for(const num of arr) {
        
        arrMap.set(num, (arrMap.get(num) || 0) +1)
    }
    
    for(let i=0; i<arr.length; i++) {
        
        let num = arr[i]
        
        if(arrMap.get(num) === num) {
            max=Math.max(max, num)
        }
        
    }
    
    return max
};