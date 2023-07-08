/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    //sliding window approach: 
    
    let m = needle.length;
    let n = haystack.length;
    
    for(let left=0; left<=n-m; left++){ //window can not go past n-m
       
          for (let i = 0; i < m; i++) {
            if (needle[i] != haystack[left+ i]) { 
                //needle not here, exit loop
                break;
            }
            if (i == m - 1) {
                //needle found if all i letters match
                return left;
            }
        }
       
    }
    //if not found return -1
    return -1
};



//time complexity: O(nm)
//space complexity: O(1)
