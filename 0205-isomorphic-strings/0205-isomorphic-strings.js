/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    if(s.length !== t.length) return false 
    //If s and t have different lengths, they can't be isomorphic
    
    //hash maps
    let sMap = {}
    let tMap = {}
    
    for(let i=0; i<s.length; i++) {
        let sChar = s[i]
        let tChar = t[i]
        
        
    //mapping s -> t
        if(sMap[sChar]){
            if(sMap[sChar] !== tChar) return false
            
        } else {
            sMap[sChar] = tChar
        }
        
    //mapping t -> s
        if(tMap[tChar]) {
             if(tMap[tChar]  !== sChar) return false
        } else {
            tMap[tChar] = sChar
        }
        
    } 
    
    return true
};