const emojiMappings = {
    'stop': '🚫',
    'gwiazda': '⭐️',
    'samochód': '🏎',
    'buduję': '🧱',
    'budzik': '⏰'
  };


  function useEmoji(input) {
    const resArray = [];
  
    // Wyrażenie regularne do podziału wejściowego tekstu na słowa
    const words = input.split(/\s+/);
  
    words.forEach(word => {
      const lowerCaseWord = word.toLowerCase();
  
      if (lowerCaseWord in emojiMappings) {
        resArray.push(emojiMappings[lowerCaseWord]);
      } 
      else if (word.endsWith('.')) {
        const wordWithoutDot = lowerCaseWord.replace(/\.$/, '');
        if (wordWithoutDot in emojiMappings) {
          resArray.push(`${emojiMappings[wordWithoutDot]}.`);
        } 
      } 
      else {
        resArray.push(word);
      }
    });
  
    return resArray.join(' ');
  }

  /* Weryfikacja */

function verify(input, goal) {
    if (input === goal) {
      console.log('Gratulacje!');
    } else {
      console.log(`Niestety, oczekiwano - ${goal}, otrzymano - ${input}`);
    }
  }
  
  verify(
    useEmoji("Takiemu zachowaniu mówię stop i to mocny estop!"),
    "Takiemu zachowaniu mówię 🚫 i to mocny estop!"
  );
  verify(useEmoji("Jadę po nowy samochód :D"), "Jadę po nowy 🏎 :D");
  verify(useEmoji("Jadę po nowy samochódy :D"), "Jadę po nowy samochódy :D");
  verify(
    useEmoji("Właśnie buduję swoje skille w JS"),
    "Właśnie 🧱 swoje skille w JS"
  );
  verify(
    useEmoji("Właśnie nadbuduję swoje skille w JS"),
    "Właśnie nadbuduję swoje skille w JS"
  );
  verify(useEmoji("Buduję samochód"), "🧱 🏎");
  verify(useEmoji("BuDuję SaMocHód."), "🧱 🏎.");
  