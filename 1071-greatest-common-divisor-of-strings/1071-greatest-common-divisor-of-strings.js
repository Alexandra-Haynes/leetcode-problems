/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
function gcd(a, b) {
    if (b === 0) return a;
    return gcd(b, a % b);
}

var gcdOfStrings = function(str1, str2) {
    const len1 = str1.length;
    const len2 = str2.length;

    const commonLength = gcd(len1, len2);
    
    const potentialDivisor = str1.substring(0, commonLength);
    
    if (str1.split(potentialDivisor).join('') === '' && str2.split(potentialDivisor).join('') === '') {
        return potentialDivisor;
    }
    
    return '';
};
