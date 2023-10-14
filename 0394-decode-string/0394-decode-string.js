/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    
    const stack = []
    
    for (let char of s) {
        if (char !== ']') {
            stack.push(char)
        } else {
       
            let encodedStr = ''
            while (stack[stack.length - 1] !== '[') {
                encodedStr = stack.pop() + encodedStr
            }
            stack.pop()
          
            let k = ''
            while (stack.length > 0 && !isNaN(stack[stack.length - 1])) {
                k = stack.pop() + k
            }
            k = parseInt(k)
            
            stack.push(encodedStr.repeat(k))
        }
    }
    
    return stack.join('')
}