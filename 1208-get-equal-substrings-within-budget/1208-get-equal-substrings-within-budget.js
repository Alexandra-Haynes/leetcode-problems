/**
 * @param {string} s
 * @param {string} t
 * @param {number} maxCost
 * @return {number}
 */
var equalSubstring = function(s, t, maxCost) {
    
    //using sliding window:
  
   let maxLength = 0
   let currentCost = 0
   let start = 0  //the start index of the sliding window
   //maxCost -  maximum cost allowed to change a character

  for (let end = 0; end < s.length; end++) {
    const cost = Math.abs(s.charCodeAt(end) - t.charCodeAt(end)) //the cost of changing the character at the current position 
    currentCost += cost

    while (currentCost > maxCost) {
      const startCost = Math.abs(s.charCodeAt(start) - t.charCodeAt(start))
      currentCost -= startCost
      start++ //move pointer forward
    }

    maxLength = Math.max(maxLength, end - start + 1)
  }

  return maxLength

}


//time: O(n)
//space: O(1)