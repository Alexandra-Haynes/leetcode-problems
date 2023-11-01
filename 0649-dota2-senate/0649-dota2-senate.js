/**
 * @param {string} senate
 * @return {string}
 */
var predictPartyVictory = function(senate) {
    
  const n = senate.length
  const radiantQueue = []
  const direQueue = []

 
  for (let i = 0; i < n; i++) {
    if (senate[i] === 'R') {
      radiantQueue.push(i)
    } else {
      direQueue.push(i)
    }
  }

  while (radiantQueue.length > 0 && direQueue.length > 0) {
    const radiantIndex = radiantQueue.shift();
    const direIndex = direQueue.shift();


    if (radiantIndex < direIndex) {
      radiantQueue.push(radiantIndex + n)
    } else {
      direQueue.push(direIndex + n)
    }
  }

  return radiantQueue.length > direQueue.length ? 'Radiant' : 'Dire'
};