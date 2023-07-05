/**
 * @param {number} n
 * @return {Function} counter
 */


var createCounter = function(n) {
    //closures: the inner function has access to any variables above it
    //the inner funct has access to param n
    return () => n++  //using arrow func and implicit return
};


/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */