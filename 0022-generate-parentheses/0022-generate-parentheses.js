/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let output=[];
    generateParentheses(output, '', 0, 0, n)
    return output;
};

function generateParentheses(output, currentCombination, openCount, closeCount, n) {
  if(currentCombination.length === 2 * n){
      //check if is a valid combination
      output.push(currentCombination)
      return;
  }
  if(openCount < n) {
      generateParentheses(output, currentCombination +'(', openCount +1, closeCount, n)
  }
  if(closeCount < openCount) {
      generateParentheses(output, currentCombination + ')', openCount, closeCount+1, n)
  }
}