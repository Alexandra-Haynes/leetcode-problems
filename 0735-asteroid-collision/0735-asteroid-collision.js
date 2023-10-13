/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(asteroids) {
  const stack = [];

  for (const asteroid of asteroids) {
    handleAsteroid(asteroid);
  }

  function handleAsteroid(asteroid) {
    if (stack.length === 0 || asteroid > 0) {
      stack.push(asteroid);
    } else {
      while (stack.length > 0) {
        const top = stack.pop();
        if (top < 0) {
          // If the top asteroid is also moving left (negative), add the current asteroid to the stack.
          stack.push(top);
          stack.push(asteroid);
          break;
        } else {
          const collisionResult = top + asteroid;
          if (collisionResult === 0) {
            // Both asteroids explode.
            break;
          } else if (collisionResult > 0) {
            // Top asteroid survives, push it back and break.
            stack.push(top);
            break;
          } else if (stack.length === 0) {
            // If the stack is empty, add the current asteroid to the stack.
            stack.push(asteroid);
            break;
          }
        }
      }
    }
  }

  return stack;
};