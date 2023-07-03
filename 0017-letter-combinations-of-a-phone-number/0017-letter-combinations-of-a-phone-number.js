/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
   if(digits.length == 0) return []
   const map = {
       2:['a', 'b', 'c'],
       3:['d', 'e', 'f'],
       4:['g','h', 'i'],
       5:['j', 'k', 'l'],
       6:['m', 'n','o'],
       7:['p', 'q', 'r', 's'],
       8:['t', 'u', 'v'],
       9:['w', 'x', 'y', 'z']
   }

   let iterate = (digits) => {
         let output=[]
         if(digits.length === 1) return map[digits]
         let firstDigit = digits.slice(0,1)
         let theRestOfDigits = iterate(digits.slice(1))

         for(let i=0; i<map[firstDigit].length; i++){
             for(let j=0; j<theRestOfDigits.length; j++){
                 output.push(map[firstDigit][i] + theRestOfDigits[j])
             }
         }

    return output;
   }
   return iterate(digits)
};