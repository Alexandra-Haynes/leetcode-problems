/**
 * @param {string} path
 * @return {boolean}
 */
var isPathCrossing = function(path) {
    
    //use a set to keep track of each unique point to arrive at
    let visited = new Set()
    
    visited.add("0,0")
    
    //we start at (0,0)
    let y=0
    let x=0
    
    
    //for each move to add or substract an unit from x or y
    for(let coord of path){
        if (coord === 'N') y++
        if (coord === 'S') y--
        if (coord === 'E') x++
        if (coord === 'W') x--
        
    //check if we've been in that point before    
        let newPoint = `${x},${y}`
        if(visited.has(newPoint) ) return true
        visited.add(newPoint)
    }
    
    return false
};

//time: O(n), we iterate through the path once
//space: O(n), in the worst case, if the path doesn't cross itself, we store all visited positions in the visited set.