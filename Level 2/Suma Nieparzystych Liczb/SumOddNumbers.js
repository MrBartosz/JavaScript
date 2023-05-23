function rowSumOddNumbers(n) {
    const firstNumber = (n - 1) * n + 1;
    let sum = 0;
  
    for (let i = 0; i < n; i++) {
      sum += firstNumber + 2 * i;
    }
  
    return sum;
  }

console.log(rowSumOddNumbers(1)) // Output: 1
console.log(rowSumOddNumbers(2)); // Output: 8
console.log(rowSumOddNumbers(5)); // Output: 125
console.log(rowSumOddNumbers(10)); // Output: 1000
console.log(rowSumOddNumbers(42)) // Output: 74088