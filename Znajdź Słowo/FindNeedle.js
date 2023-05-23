function findNeedle(haystack) {
    let result = '' 
    haystack.forEach((el, index) => {
      if (el === 'needle') {
        result = `found the needle at position ${index}`
      }
    })
    if (result) {
     return result;
    }
    else {
      return `Your function didn't return anything`
    }
  }
  console.log(findNeedle(['hay', 'hay', 'needle', 'hay']));             // Output: found the needle at position 2
  console.log(findNeedle(['needle']));                                  // Output: found the needle at position 0
  console.log(findNeedle(['hay', 'hay', 'hay']));                       // Output: Your function didn't return anything
  console.log(findNeedle([]));                                          // Output: Your function didn't return anything
  console.log(findNeedle(['hay', 'needle', 'hay', 'needle']));          // Output: found the needle at position 3
  console.log(findNeedle(['hay', 'hay', 'hay', 'needle']));             // Output: found the needle at position 3
  console.log(findNeedle(['needle', 'hay', 'hay', 'hay']));             // Output: found the needle at position 0
  console.log(findNeedle(['hay', 'hay', 'needle', 'hay', 'needle']));   // Output: found the needle at position 4
  console.log(findNeedle(['hay', 'needle', 'hay', 'hay', 'hay']));      // Output: found the needle at position 1
  console.log(findNeedle(['hay', 'hay', 'needle', 'hay', 'hay']));      // Output: found the needle at position 2