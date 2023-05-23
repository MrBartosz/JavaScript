function sortArray(array) {
    const result = [];
    const sortedOdds = array.filter(num => num % 2 !== 0).sort((a, b) => a - b);
    let sortedOddsIndex = 0;
  
    for (let i = 0; i < array.length; i++) {
      if (array[i] % 2 === 0) {
        result.push(array[i]);
      } else {
        result.push(sortedOdds[sortedOddsIndex]);
        sortedOddsIndex++;
      }
    }
  
    return result;
  }

console.log(sortArray([]));                             // Output: []
console.log(sortArray([5]));                            // Output: [5]
console.log(sortArray([2]));                            // Output: [2]
console.log(sortArray([4, 2, 8, 6]));                   // Output: [4, 2, 8, 6]
console.log(sortArray([10, 20, 30, 40]));               // Output: [10, 20, 30, 40]
console.log(sortArray([3, 7, 1, 5]));                   // Output: [1, 3, 5, 7]
console.log(sortArray([9, 1, 5, 3]));                   // Output: [1, 3, 5, 9]
console.log(sortArray([2, 7, 4, 1, 8, 6, 3]));          // Output: [2, 1, 4, 3, 8, 6, 7]
console.log(sortArray([9, 8, 7, 6, 5, 4, 3, 2, 1, 0])); // Output: [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]