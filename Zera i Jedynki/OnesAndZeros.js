const binaryArrayToNumber = arr => {
    const binaryString = arr.join('');
    const integerValue = parseInt(binaryString, 2);
  
    return integerValue;
  };

  console.log(binaryArrayToNumber([0,0,0,1])) // 1
  console.log(binaryArrayToNumber([0,0,1,0])) // 2
  console.log(binaryArrayToNumber([1,1,1,1])) // 15
  console.log(binaryArrayToNumber([0,1,1,0])) // 6