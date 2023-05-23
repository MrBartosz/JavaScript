function countWords(sentence) {
    const result = {};
    const words = sentence.split(' ');
    for (let word of words) {
      const wordLowerCase = word.toLowerCase().replace(/\,/g,'');
      result[wordLowerCase] ? result[wordLowerCase] ++ : result[wordLowerCase] = 1;
    }
    return result
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
  
  verify(JSON.stringify(countWords("Nauka JavaScript z kursem JavaScript to frajda")), JSON.stringify({
    nauka: 1,
    javascript: 2,
    z: 1,
    kursem: 1,
    to: 1,
    frajda: 1
  }));
  verify(JSON.stringify(countWords("Tanie wino jest dobre, bo jest tanie i dobre")), JSON.stringify({
    tanie: 2,
    wino: 1,
    jest: 2,
    dobre: 2,
    bo: 1,
    i: 1,
  }));