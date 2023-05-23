function isTriangle(a,b,c) {
    if (a<=0 || b <= 0 || c <= 0) {
      return false;
    }
    if (a+b>c && b+c>a && a+c>b) {
      return true;
    }
    else {
      return false;
    }
     
  }

console.log(isTriangle(3, 4, 5)); // true
console.log(isTriangle(1, 1, 3)); // false
console.log(isTriangle(6, 8, 10)); // true
console.log(isTriangle(0, 2, 4)); // false
console.log(isTriangle(5, 5, 10)); // false
console.log(isTriangle(2, 2, 2)); // true
console.log(isTriangle(1, 2, 2)); // true
console.log(isTriangle(2, 1, 2)); // true
console.log(isTriangle(2, 2, 1)); // true
console.log(isTriangle(7, 10, 5)); // true
console.log(isTriangle(12, 3, 4)); // false
console.log(isTriangle(8, 15, 20)); // true
console.log(isTriangle(10, 5, 2)); // false
console.log(isTriangle(9, 9, 18)); // false
console.log(isTriangle(17, 17, 17)); // true
console.log(isTriangle(4, 13, 15)); // true
console.log(isTriangle(5, 12, 13)); // true
console.log(isTriangle(11, 6, 10)); // true
console.log(isTriangle(7, 24, 25)); // true
console.log(isTriangle(8, 17, 15)); // true
console.log(isTriangle(20, 9, 8)); // true
console.log(isTriangle(30, 40, 50)); // true
console.log(isTriangle(5, 5, 9)); // false
console.log(isTriangle(12, 12, 24)); // false
console.log(isTriangle(18, 7, 16)); // false
console.log(isTriangle(1, 2, 5)); // false
