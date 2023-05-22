var isSquare = function(n){
    if (n < 0) {
      return false; // Negative numbers cannot be square numbers
    }
    let i = 0;
    while (i <= Math.sqrt(n)) {
      if (i*i === n) {
        return true;
      }
      i++;
    }
    return false;
  }


console.log(isSquare(-1)); // false
console.log(isSquare(0)); // true
console.log(isSquare(3)); // false
console.log(isSquare(4)); // true
console.log(isSquare(9)); // true
console.log(isSquare(10)); // false
console.log(isSquare(16)); // true
console.log(isSquare(17)); // false
console.log(isSquare(25)); // true
console.log(isSquare(26)); // false
console.log(isSquare(36)); // true
console.log(isSquare(37)); // false
console.log(isSquare(49)); // true
console.log(isSquare(50)); // false
console.log(isSquare(64)); // true
console.log(isSquare(65)); // false
console.log(isSquare(81)); // true
console.log(isSquare(82)); // false