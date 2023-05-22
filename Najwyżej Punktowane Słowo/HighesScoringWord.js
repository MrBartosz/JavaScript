function high(x) {
    const alphabet = [
      'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
      'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
    ];
  
    const words = x.split(' ');
    let maxScore = 0;
    let maxWord = '';
  
    words.forEach(word => {
      let score = 0;
      for (let i = 0; i < word.length; i++) {
        score += alphabet.indexOf(word[i]) + 1;
      }
      if (score > maxScore) {
        maxScore = score;
        maxWord = word;
      }
    });
  
    return maxWord;
  }

console.log(high('man i need a taxi up to ubud')) // taxi
console.log(high('what time are we climbing up the volcano')) // volcano
console.log(high('take me to semynak')) // semynak
console.log(high('car taxi bus')); // taxi
console.log(high('apple banana orange')); // orange
console.log(high('cat dog bird')); // bird
console.log(high('elephant giraffe lion tiger')); // elephant
console.log(high('red blue green yellow')); // yellow
console.log(high('house apartment villa')); // apartment
console.log(high('sun moon stars')); // stars
console.log(high('book pen pencil')); // pencil
console.log(high('coffee tea juice water')); // water
console.log(high('hat cap gloves socks')); // gloves