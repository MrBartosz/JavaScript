function getAnagrams(word, possibleAnagrams) {
    const result = [];
    const sorted = word.split('').sort().join('')
    for (let word of possibleAnagrams) {
      if (sorted === word.split('').sort().join('')) {
        result.push(word)
      } 
    }
    return result.join(', ');
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
  
  verify(getAnagrams("przeprogramowani", ["orperzpinawomarg", "swag", "graprzewanipromo", "orperzpwaniprom", "siema"]), "orperzpinawomarg, graprzewanipromo");
  verify(getAnagrams("siema", ["hej", "witam", "dzień dobry", "emasi"]), "emasi");