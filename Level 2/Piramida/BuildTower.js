function towerBuilder(nFloors) {
    const result = [];
    
    for (let i = 1; i <= nFloors; i++) {
      const spaces = ' '.repeat(nFloors - i);
      const stars = '*'.repeat(2 * i - 1);
      const floor = spaces + stars + spaces;
      result.push(floor);
    }
    
    return result;
  }

console.log(towerBuilder(1)); 
// Output:
// [
//   "*"
// ]

console.log(towerBuilder(3)); 
// Output:
// [
//   "  *  ",
//   " *** ",
//   "*****"
// ]

console.log(towerBuilder(6)); 
// Output:
// [
//   "     *     ",
//   "    ***    ",
//   "   *****   ",
//   "  *******  ",
//   " ********* ",
//   "***********"
// ]

console.log(towerBuilder(0)); 
// Output:
// []

console.log(towerBuilder(10)); 
// Output:
// [
//   "         *         ",
//   "        ***        ",
//   "       *****       ",
//   "      *******      ",
//   "     *********     ",
//   "    ***********    ",
//   "   *************   ",
//   "  ***************  ",
//   " ***************** ",
//   "*******************"
// ]