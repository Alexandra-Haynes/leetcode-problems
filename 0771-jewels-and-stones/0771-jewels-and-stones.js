/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    
    //hash map to store the count of stones
    const stoneMap = new Map()
    
    //count our stones
    
    for(let i=0; i<stones.length; i++) {
        const stone = stones[i]
        
        stoneMap.set(stone, (stoneMap.get(stone) || 0) + 1)
    }
    
    let jewelsCount = 0
    
    //check if each of our stones is a jewel
    
    for(let i=0; i< jewels.length; i++) {

        const jewel = jewels[i]
        
        if(stoneMap.has(jewel)) jewelsCount +=stoneMap.get(jewel)
    }
    
    return jewelsCount
};