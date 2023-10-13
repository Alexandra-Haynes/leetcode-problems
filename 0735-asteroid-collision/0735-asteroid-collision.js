/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(asteroids) {
  const stack = []
  for (const asteroid of asteroids) {
    handleAsteroid(asteroid)
  }
  function handleAsteroid(asteroid) {
    if (stack.length === 0 || asteroid > 0) {
      stack.push(asteroid)
    } else {
      while (stack.length > 0) {
        const top = stack.pop()
        if (top < 0) {
          stack.push(top)
          stack.push(asteroid)
          break
        } else {
          const collisionResult = top + asteroid;
          if (collisionResult === 0) {
            break
          } else if (collisionResult > 0) {
            stack.push(top)
            break
          } else if (stack.length === 0) {
            stack.push(asteroid)
            break
          }
        }
      }
    }
  }

  return stack
};