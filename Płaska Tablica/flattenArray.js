function flattenArray(deepArray) {
    const result = [];
    
    deepArray.flat().filter(el => {
      if (el !== undefined && el !== null && !result.includes(el)) {
        result.push(el)
      }
    })
    return result.join(', ')
  }
  
  
  /* Weryfikacja */
  
  function verify(input, goal) {
    input = Array.isArray(input) ? input.join(', ') : input;
    if (input == goal) {
      console.log('Gratulacje!');
    } else {
      console.log(`Niestety, oczekiwano - ${goal}, otrzymano - ${input}`);
    }
  }
  
  verify(flattenArray([4, [3, 2, undefined, 1], [1, 4, null, 5]]), "4, 3, 2, 1, 5");
  verify(flattenArray([null, [1, 2, 3], [null, undefined]]), "1, 2, 3");
  