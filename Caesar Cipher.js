/* Cel zadania
*------------
* Stwórz moduł eksportujący z pomocą ES6 Modules funkcję caesar13. Jako parametr funkcja ta ma
przyjmować ciąg znaków a następnie zwracać zaszyfrowany zgodnie z ROT13. Wykorzystaj powyższy
przykład działania aby zweryfikować poprawność Twojej funkcji.
*
* Po ukończeniu, funkcja ma spełniać następujące wymagania:

1. Funkcja caesar13 ma zwracać zaszyfrowany ciąg znaków, przesunięty o 13 liter (bez polskich znaków).

2. Liczby w ciągu znaków mają nie ulegać zmianie.

3. Funkcja ma obsługiwać zarówno wielkie jak i małe litery

4. Funkcja ma zwracać komunikat gdy podany argument nie jest ciągiem znaków lub jest pusty.
*/
  
const caesar13 = (input) => {

  if (typeof input !== 'string' || input.length === 0) {
    return 'Podany argument nie jest ciągiem znaków lub jest pusty.';
  }

  const alphabetLowerCase = 'abcdefghijklmnopqrstuvwxyz';
  const alphabetUpperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  let result = '';
  for (let i = 0; i < input.length; i++) {
    const char = input[i];
    let shiftedChar = char;
    let alphabet;
    
    if (alphabetLowerCase.includes(char)) {
      alphabet = alphabetLowerCase;
    } else if (alphabetUpperCase.includes(char)) {
      alphabet = alphabetUpperCase;
    }
    
    if (alphabet) {
      const index = alphabet.indexOf(char);
      const shiftedIndex = (index + 13) % alphabet.length;
      shiftedChar = alphabet[shiftedIndex];
    }
    
    result += shiftedChar;
  }
  
  return result;
};


const input = prompt('Podaj kod do zaszyfrowania');
console.log(caesar13(input));

