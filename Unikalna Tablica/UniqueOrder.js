var uniqueInOrder = function(iterable) {
    const result = [];
  
    for (let i = 0; i < iterable.length; i++) {
      if (iterable[i] !== iterable[i + 1]) {
        result.push(iterable[i]);
      }
    }
  
    return result;
  };

console.log(uniqueInOrder('AAAABBBCCDAABBB')) //  ['A','B','C','D','A','B']
console.log(uniqueInOrder('ABBCcAD')); // ['A', 'B', 'C', 'c', 'A', 'D']
console.log(uniqueInOrder('122333444455555')); // ['1', '2', '3', '4', '5']
console.log(uniqueInOrder([1, 2, 2, 3, 3])); // [1, 2, 3]
console.log(uniqueInOrder(['a', 'a', 'b', 'c', 'c'])); // ['a', 'b', 'c']
console.log(uniqueInOrder([])); // []
console.log(uniqueInOrder('XYZZZYYX')); // ['X', 'Y', 'Z', 'Y', 'X']
console.log(uniqueInOrder([true, true, false, true, true])); // [true, false, true]
console.log(uniqueInOrder([null, null, undefined, undefined])); // [null]
console.log(uniqueInOrder([NaN, NaN, NaN, NaN])); // [NaN,NaN,NaN,NaN]