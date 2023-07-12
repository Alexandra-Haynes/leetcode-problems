/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    
    let freqMap = new Map()
    
    for(let ch of s) {
        freqMap.set(ch, (freqMap.get(ch) || 0) +1)
    }
    
    //sort the characters based on frequency in descending order
    let freqSorted = [...freqMap.keys()].sort((a, b) => freqMap.get(b) - freqMap.get(a))
    
    
     //build the sorted string
  let ans = ''
  for (let i = 0; i < freqSorted.length; i++) {
    const ch = freqSorted[i]
    const frequency = freqMap.get(ch)
    ans += ch.repeat(frequency)
  }

  return ans
};

