/**
 * @param {number[][]} matches
 * @return {number[][]}
 */
var findWinners = function(matches) {
  const seen = new Set();
  const losses = new Map();

  for (const [winner, loser] of matches) {
      seen.add(winner);
      seen.add(loser);
    
       losses.set(loser, (losses.get(loser) || 0) + 1);

  }

 const zeroLose = [];
  const oneLose = [];

  for (const player of seen) {
       const count = losses.get(player) || 0;
      
      if (count === 0) {
      zeroLose.push(player);
    } else if (count === 1) {
      oneLose.push(player);
    }
  }
  
  zeroLose.sort((a, b) => a - b);
  oneLose.sort((a, b) => a - b);

  return [zeroLose, oneLose];
}