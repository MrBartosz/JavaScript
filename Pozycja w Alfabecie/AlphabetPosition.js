function alphabetPosition(text) {
    const result = [];
    const alphabet = [
      'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
      'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
    ];
  
    text.toLowerCase().split('').forEach(el => {
      if (alphabet.includes(el)) {
        result.push(alphabet.indexOf(el) + 1);
      }
    });
  
    return result.join(' ');
  }

  console.log(alphabetPosition('The quick brown fox jumps over the lazy dog')); // Output: '20 8 5 17 21 9 3 11 2 18 15 23 14 6 15 24 10 21 13 16 19 15 22 5 18 20 8 5 12 1 26 25 4 15 7'
  console.log(alphabetPosition('The sunset sets at twelve o clock.')); // Output: '20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11'
  console.log(alphabetPosition('The narwhal bacons at midnight.')); // Output: '20 8 5 14 1 18 23 8 1 12 2 1 3 15 14 19 1 20 13 9 4 14 9 7 8 20'