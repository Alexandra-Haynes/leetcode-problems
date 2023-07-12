/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    
    let rMap = new Map()
    let mMap = new Map()
    
    for(let i=0; i<magazine.length; i++) {
        const ch = magazine[i]
        mMap.set(ch, (mMap.get(ch) || 0) +1)
    }
    
    for(let i=0; i<ransomNote.length; i++) {
        
        let ch= ransomNote[i]
        
        if(!mMap.has(ch) || mMap.get(ch) === 0 ) return false
        
        rMap.set(ch, (rMap.get(ch) || 0 ) +1)
        mMap.set(ch, (mMap.get(ch) -1))
    }
    
    return true
};