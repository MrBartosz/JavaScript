function thing(box) {
    // Sprawdza, czy w pudełku jest '*o*'
    return box.split(' ').join('').includes('*o*');
  }
  
  /* Weryfikacja */
  
  function verify(input, goal) {
    if (input === goal) {
      console.log('Gratulacje!');
    } else {
      console.log(`Niestety, oczekiwano - ${goal}, otrzymano - ${input}`);
    }
  }

  verify(thing(`*****
                *   * o
                *   *
                *****`), false);
  

  verify(thing(`*****
                * o *
                *   *
                *****`), true);
  

  verify(thing(`*****
                 *   *
                 *   *
                 *****`), false);