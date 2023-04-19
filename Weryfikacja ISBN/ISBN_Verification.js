function checkISBN(input) {
    const isbn = input.replace(/\-/g,'').split(''); 
    const xSign = 10;
    const startingNumber = 10;
    let controlSum = 0;
    
    for (let i=0; i<isbn.length; i++) {
      if (isbn[i] === 'X') {
        controlSum += xSign;
      }
      else {
        const number = isbn[i] * (startingNumber - i);
        controlSum += number;
      }
    }
    
    return controlSum % 11 === 0;
      
  
  }
  
  
  /* Weryfikacja */
  
  function verify(input, goal) {
    input = Array.isArray(input) ? `[${input.join(', ')}]` : input;
    if (input == goal) {
      console.log('Gratulacje!');
    } else {
      console.log(`Niestety, oczekiwano - ${goal}, otrzymano - ${input}`);
    }
  }
  
  verify(checkISBN("85-359-0277-5"), true);
  verify(checkISBN("3-04-013311-X"), true);
  verify(checkISBN("8535902775"), true);
  verify(checkISBN("99921-58-10-3"), false);
  verify(checkISBN("9992158103"), false);