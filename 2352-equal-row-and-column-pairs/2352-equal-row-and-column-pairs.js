/**
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function(grid) {
    
    
    //arrays can't be put in a hash map as a key because they are mutable
    //if you modify the array after adding it as a key, it may lead to unexpected behavior
    // => converting the rows/columns into a hashable format
    let convertToKey = arr => {
        let key = "" //key is a string
        for(const num of arr) {
            key += num + ","
        }
        return key
    }
    
    //we use separte hash maps for the rows and columns, to easily find how many times a R or C shows up 
    
    let rows = new Map()
    for (const arr of grid) { //each arr in grid is a row
        let key = convertToKey(arr)
        //add R to map
        rows.set(key, (rows.get(key) || 0) + 1)
    }
    
    let cols = new Map()
    for(let col=0; col<grid[0].length; col++){
        let currCol=[]
        for(let row=0; row<grid.length; row++){ //move down 
            currCol.push(grid[row][col]) //add all rows
        }
        let key = convertToKey(currCol)
        cols.set(key, (cols.get(key) || 0) +1)
    }
    
    //calculate number of pairs for each row that has the same key as a col in cols map
    let ans = 0
    for (const [key, val] of rows) {
        ans += val * cols.get(key) || 0
    }
    
    return ans
};

//time complexity of O(n^2), each element is iterated over twice
    