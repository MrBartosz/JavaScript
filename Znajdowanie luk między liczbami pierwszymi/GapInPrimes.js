function gap(g, m, n) {
    const numbers = [];
    for (let i=m; i<=n; i++) {
      if (isPrime(i) && isPrime(i + g)) {
        let isGap = true;
        for (let j=i+1; j<i + g; j++) {
          if (isPrime(j)) {
            isGap = false;
            break;
          }
        }
        if (isGap) {
          return [i, i+g]
        }
      }
    }
    return null;
  }
  
function isPrime(num) {
    if (num <= 1) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
}
console.log(gap(2,100,110)) // [101, 103]
console.log(gap(4,100,110)) // [103, 107]
console.log(gap(6,100,110)) // null
console.log(gap(8,300,400)) // [359, 367]
console.log(gap(10,300,400)) // [337, 347]