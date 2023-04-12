/*
* Cel zadania
*------------
* Zaimplementuj funkcję zmieniającą tekst na pozdrowienia od Mr. Elliota, według przykładu.
*
*
* Przykład:
* greetings('hacker'); // => 'H4Ck3r'
* greeting('Control Is An Illusion'); // => 'C0NtR0L 15 4N 1lLu510n'
* greeting('Saving The World'); // => 'S4V1Ng tHe w0rLd'
* 
*/

function greeting(message) {


  const replacements = {
    'a': '4',
    'e': '3',
    'i': '1',
    'o': '0',
    's': '5'
  };
    
  return message.split('')
                .map((el, index) => {
    const lowerCaseWord = el.toLowerCase()
    if (lowerCaseWord in replacements) {
      return replacements[lowerCaseWord];
    }
    else if (index % 2 === 0) {
      return el.toUpperCase()
    }
    else {
      return lowerCaseWord;
    }
  }).join('')
}
    
    /* Weryfikacja */
    
    function verify(input, goal) {
      if (input === goal) {
        console.log('Gratulacje!');
      } else {
        console.log(`Niestety, oczekiwano - ${goal}, otrzymano - ${input}`);
      }
    }
    
    verify(greeting('hacker'), 'H4Ck3r');
    verify(greeting('Control Is An Illusion'), 'C0NtR0L 15 4N 1lLu510n');
    verify(greeting('Saving The World'), '54V1Ng tH3 w0rLd');