/**
 * @param {string} s
 * @return {string}
 */

//using the two pointers technique:

var reverseWords = function(s) {
    //the words are separated by a space character
    //we can treat each word as a substring
    
    let lastSpaceIndex = -1;
    let n = s.length
    let res = s.split('')

    for(let i=0; i<= n; i++){
       if(res[i]===' ' || i===n){ //found a substring
       //initialize the pointers
          let left=lastSpaceIndex + 1; 
          let right=i-1
          
          //reverze the characters in the current word
           while(left < right){
               let temp=res[left]
                res[left]=res[right]
                res[right]=temp
                left++
                right--
           }
           //update space pointer and search for another word
           lastSpaceIndex=i
       }
    }
    return res.join('')
};

//time: O(n), loop over all n characters and reversing takes n => O(n+n)=O(n)
//space: O(1), we track last space index, the output string not considered