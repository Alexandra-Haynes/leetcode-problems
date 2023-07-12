/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    
    let sMap = new Map()
    
    for(let i=0; i<stones.length; i++) {
        let s = stones[i]
        sMap.set(s, (sMap.get(s) || 0) +1)
    }
    
    let jCount=0
    
    for(let i=0; i< jewels.length; i++) {
      let j=jewels[i]
      
      if(sMap.has(j)) jCount +=sMap.get(j)
    }
    
    return jCount
};