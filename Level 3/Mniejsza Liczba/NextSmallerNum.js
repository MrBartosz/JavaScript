function nextSmaller(n) {
  const digits = n.toString().split('');
  if (digits.length === 1) {
    return -1;
  }

  let i = digits.length - 2;
  while (i >= 0 && digits[i] <= digits[i + 1]) {
    i--;
  }

  if (i < 0) {
    return -1;
  }

  let j = digits.length - 1;
  while (digits[j] >= digits[i]) {
    j--;
  }

  if (i === 0 && digits[j] === '0') {
    return -1;
  }

  const smallerDigits = [...digits.slice(0, i), digits[j], ...digits.slice(i, j), ...digits.slice(j + 1)];
  const result = parseInt(smallerDigits.join(''));
  return result;
}

console.log(nextSmaller(21)); // 12
console.log(nextSmaller(907)); // 790
console.log(nextSmaller(531)); // 513
console.log(nextSmaller(135)); // -1
console.log(nextSmaller(2071)); // 2017
console.log(nextSmaller(1027)); // -1
console.log(nextSmaller(414)); // 144
console.log(nextSmaller(123456798)); // 123456789
console.log(nextSmaller(123456789)); // -1
console.log(nextSmaller(1234567908)); // 1234567890