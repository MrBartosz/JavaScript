function isValidWalk(walk) {
    if (walk.length !== 10) {
      return false;
    }
  
    let ns = 0;
    let ew = 0;
  
    for (let direction of walk) {
      switch (direction) {
        case 'n':
          ns++;
          break;
        case 's':
          ns--;
          break;
        case 'e':
          ew++;
          break;
        case 'w':
          ew--;
          break;
        default:
          return false;
      }
    }
  
    return ns === 0 && ew === 0;
  }

console.log(isValidWalk(['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's'])); // true
console.log(isValidWalk(['w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e'])); // true
console.log(isValidWalk(['n', 'n', 'n', 'n', 'n', 's', 's', 's', 's', 'e'])); // false
console.log(isValidWalk(['n', 's', 'e', 'w', 'n', 's', 'e', 'w', 'n', 's'])); // true
console.log(isValidWalk(['n', 'n', 's', 's', 'e', 'e', 'w', 'w', 'n', 's'])); // true
console.log(isValidWalk(['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 'w'])); // false
console.log(isValidWalk(['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's', 'w'])); // false

