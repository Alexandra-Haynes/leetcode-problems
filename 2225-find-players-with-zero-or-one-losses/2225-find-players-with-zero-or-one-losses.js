/**
 * @param {number[][]} matches
 * @return {number[][]}
 */
var findWinners = function(matches) {
    const seen = new Set();
    const lossesCount = {};

    for (const [winner, loser] of matches) {
      seen.add(winner);
      seen.add(loser);
      lossesCount[loser] = (lossesCount[loser] || 0) + 1;
    }

    const zeroLose = [];
    const oneLose = [];

    for (const player of seen) {
      const count = lossesCount[player] || 0;
      if (count === 0) {
        zeroLose.push(player);
      } else if (count === 1) {
        oneLose.push(player);
      }
    }

    return [zeroLose.sort((a, b) => a - b), oneLose.sort((a, b) => a - b)];
  }
