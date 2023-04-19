function findTags(message) {
    const resultArray = [];
    const words = message.split(' ');
    const regex = /#(\w+)/g; // Wyrażenie regularne do znalezienia tagów
    for (const word of words) {
      const matches = word.match(regex); 
      if (matches) {
        for (const match of matches) {
          resultArray.push(match.slice(1)); 
        }
      }
    }
    return resultArray;
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
  
  verify(findTags('W 2020 #opanujeJS'), 'opanujeJS');
  verify(findTags('Za chwilę dodam #opanujeJS!'), 'opanujeJS');
  verify(findTags('Lubię tagować #yolo #love#happy #h3cker'), 'yolo, love, happy, h3cker');