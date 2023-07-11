/**
 * @param {number[][]} matches
 * @return {number[][]}
 */
var findWinners = function(matches) {
    
  const seen = new Set() //unique players encountered
  const lossesCount = new Map()

  for (const [winner, loser] of matches) {
    seen.add(winner) 
    seen.add(loser)
      
    //updating the losses in the map for each player
    lossesCount.set(loser, (lossesCount.get(loser) || 0) + 1)
  }
    
 //organizing players into the two lists
    
  const zeroLose = []
  const oneLose = []

 
  for (const player of seen) {
    const count = lossesCount.get(player) || 0
    if (count === 0) {
      zeroLose.push(player)
    } else if (count === 1) {
      oneLose.push(player)
    }
  }
 
    //we need to return the lists in incresing order  
    
  zeroLose.sort((a, b) => a - b)
  oneLose.sort((a, b) => a - b)
  
    //final answer[0,1] is
  return [zeroLose, oneLose]
  }

//time: O(nlogn), iterating through the matches array once to populate the seen O(n)
       //sorting the zeroLose and oneLose arrays at the end of the solution takes O(m log m) time, where m is the number of            players with zero or one loss.
//space: O(n)
