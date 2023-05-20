function binarray(a) {
  const countDict = { 0: -1 };
  let maxLen = 0;
  let count = 0;

  for (let i = 0; i < a.length; i++) {
    count += a[i] === 1 ? 1 : -1;

    if (count === 0) {
      maxLen = i + 1;
    } else if (count in countDict) {
      maxLen = Math.max(maxLen, i - countDict[count]);
    } else {
      countDict[count] = i;
    }
  }

  return maxLen;
}



    
   console.log(binarray([0,1]))
   console.log(binarray([0]))
   console.log(binarray([1,1,0,1,1,0,1,1]))
   console.log(binarray([0,1,1,0,1,1,1,0,0,0]))
   console.log(binarray([0,0,1,1,1,0,0,0,0,0]))
