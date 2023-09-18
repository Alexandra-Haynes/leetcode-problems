/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
    let index = 0
    let i = 0

    while (i < chars.length) {
        let j = i
        while (j < chars.length && chars[j] == chars[i]) {
            j++
        }
        
        
        chars[index++] = chars[i]
        
        if (j - i > 1) {
            let count = (j - i).toString()
            for (let c of count) {
                chars[index++] = c
            }
        }
        
        i = j
    }
    
    return index
};

