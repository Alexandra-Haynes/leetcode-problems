/**
 * @param {string} path
 * @return {boolean}
 */
var isPathCrossing = function(path) {
    
    
    let visited = new Set([0,0])
    
    visited.add("0,0")
    
    let y=0
    let x=0
    for(let coord of path){
        if (coord === 'N') y++
        if (coord === 'S') y--
        if (coord === 'E') x++
        if (coord === 'W') x--
        
        let newPoint = `${x},${y}`
        if(visited.has(newPoint) ) return true
        visited.add(newPoint)
    }
    
    return false
};