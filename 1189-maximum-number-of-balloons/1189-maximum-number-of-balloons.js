/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function(text) {
    const charCount = new Map()

  //count the frequency of each character in the given text
  for (const char of text) {
    charCount.set(char, (charCount.get(char) || 0) + 1)
  }

  //count the required characters for "balloon"
  const balloonChars = new Map([
    ["b", 1],
    ["a", 1],
    ["l", 2],
    ["o", 2],
    ["n", 1]
  ])

  let maxInstances = Infinity 
  //maximum number of instances of the word "balloon" that can be formed based on the count of each required character
  //any subsequent value we find will be smaller than Infinity

  //find the maximum count of instances
  for (const [char, count] of balloonChars) {
      
    if (!charCount.has(char)) {
      return 0 //if any 'balloon' ch is missing, return 0 instances
    }
      
    const instances = Math.floor(charCount.get(char) / count)
    //checks if the word has every ch in 'balloon' at least once
    
    maxInstances = Math.min(maxInstances, instances) //update the max, if necessary
      //contains the smallest value between the current maxInstances and the calculated instances
      //for ex: 'b' can appear 3times, but 'o' only once, in this case we only care about 1
  }

  return maxInstances
}

//time: O(n), iterated through the text string once, iterating through "balloon" takes constant time 
//space:O(1), limited to the number of unique characters in the text string and the fixed number of characters for "balloon"