/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    
  const s1Freq = new Map()
  const s2Freq = new Map()
  let matched = 0

  //populating s1Freq with frequencies of characters in s1
  for (let i = 0; i < s1.length; i++) {
    const ch = s1[i]
    s1Freq.set(ch, (s1Freq.get(ch) || 0) + 1)
  }

  //populating s2 map while also checking if the curr ch's frequency <= the frequency in s1Freq  
  for (let right = 0; right < s2.length; right++) {
    const char = s2[right]
    s2Freq.set(char, (s2Freq.get(char) || 0) + 1)

    if (s2Freq.get(char) <= s1Freq.get(char)) {
      matched++ //ch's freq match
    }

     //we use sliding window to check for a permutation substring
      
    if (right >= s1.length) { //the size of the current window is greater than the length of s1
     
      const leftCh = s2[right - s1.length] 
      //the window's left margin is curr index-substring's length
      
      s2Freq.set(leftCh, s2Freq.get(leftCh) - 1)

      if (s2Freq.get(leftCh) < s1Freq.get(leftCh)) {
        matched-- //freq doens't match
      }
    }

    if (matched === s1.length) {
      return true
    }
  }

  return false
}

//time: O(n),  n - the length of s2, we iterate through s2 once using the sliding window technique
//space: O(k), k - the number of distinct characters in s1 and s2 (the hash maps store the frequency counts for each distinct character)


//Obs: space complexity could be improved to O(1), using arrays instead of maps,  since the size of the array is constant (26 in this case) and does not depend on the input size



/*

function checkInclusion(s1, s2) {

  const s1Freq = new Array(26).fill(0)
  const s2Freq = new Array(26).fill(0)
  const aCharCode = 'a'.charCodeAt(0)
  let matched = 0

 
  for (let i = 0; i < s1.length; i++) {
    const charIndex = s1.charCodeAt(i) - aCharCode
    s1Freq[charIndex]++
  }

  for (let right = 0; right < s2.length; right++) {
    const charIndex = s2.charCodeAt(right) - aCharCode;
    s2Freq[charIndex]++

    if (s2Freq[charIndex] <= s1Freq[charIndex]) {
      matched++
    }

    if (right >= s1.length) {
      const leftCharIndex = s2.charCodeAt(right - s1.length) - aCharCode;
      s2Freq[leftCharIndex]--

      if (s2Freq[leftCharIndex] < s1Freq[leftCharIndex]) {
        matched--
      }
    }

    if (matched === s1.length) {
      return true
    }
  }

  return false
}

*/