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
    while (j > i && digits[j] >= digits[i]) {
      j--;
    }
  
    if (i === 0 && digits[j] === '0') {
      return -1;
    }
  
    swap(digits, i, j);
    reverse(digits, i + 1);
  
    const result = parseInt(digits.join(''));
    return result;
  }
  
  function swap(arr, i, j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  
  function reverse(arr, start) {
    let i = start;
    let j = arr.length - 1;
    while (i < j) {
      swap(arr, i, j);
      i++;
      j--;
    }
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