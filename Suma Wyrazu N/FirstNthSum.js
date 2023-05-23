function SeriesSum(n) {
    if (n === 0) {
      return "0.00";
    }
    
    let result = 0;
    
    
    for (let i=0; i<n; i++) {
      result += 1 / (1 + 3 * i)
    }
    
    return result.toFixed(2);
  }

console.log(SeriesSum(0));  // Output: "0.00"
console.log(SeriesSum(3));  // Output: "1.39"
console.log(SeriesSum(6));  // Output: "1.63"
console.log(SeriesSum(10)); // Output: "1.81"
console.log(SeriesSum(15)); // Output: "1.89"