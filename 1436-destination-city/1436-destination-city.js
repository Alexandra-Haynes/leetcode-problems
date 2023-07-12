/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function(paths) {
   //the destination can only be in the outgoing cities => paths[i][1]
    
    let outgoingCities = new Set()
    
    
    //we add cities in a set
    for(let i=0; i<paths.length; i++){
        outgoingCities.add(paths[i][0])   
    }
    
    //check if any city is only in paths[i][1], the destination
    
    for(let i=0; i<paths.length; i++){

        if(!outgoingCities.has(paths[i][1])) return paths[i][1]
    }
    
    //code should never get to this point
    return ''
};

//time: O(n), we iterate through paths twice
//space: O(n), our outgoingCities set containing all cities in the array