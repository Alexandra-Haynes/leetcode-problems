/**
 * @param {string} s
 * @return {string}
 */
var removeStars = function(s) {
  const stack = []
  for (let char of s) {
    if (char === '*') {
            if (stack.length > 0) {
        stack.pop()
      }
    } else {
      stack.push(char)
    }
  }
  return stack.join('')
}

//time complexity: O(n)
//space complexity: O(n)