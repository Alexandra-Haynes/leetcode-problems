/**
 * @param {number[]} cards
 * @return {number}
 */
var minimumCardPickup = function(cards) {
    
    //the shortest subarray that contains a duplicate will have the first and last element be the duplicat =>
    //we just need to find the shortest distance between any two of the same element
    
    let dic = new Map()
    let ans = Infinity
    for (let i = 0; i < cards.length; i++) {
        
        if (dic.has(cards[i])) {
            ans = Math.min(ans, i - dic.get(cards[i]) + 1) // equivalent of right-left+1 in sliding window
        }
        
        //record the position of each element in a hash map
        //key=the element, value = an array of all the indices it appears at
        
        dic.set(cards[i], i)
    }

    return ans == Infinity ? -1 : ans
};

//time complexity: O(n)