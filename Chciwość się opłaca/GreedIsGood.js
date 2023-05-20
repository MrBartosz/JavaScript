function score(dice) {
    let result = 0;
    let box = {};
  
    for (let digit of dice) {
      box[digit] = box[digit] ? box[digit] + 1 : 1;
    }
  
    for (let j = 1; j <= 6; j++) {
      if (box[j] >= 3) {
        if (j === 1) {
          result += 1000;
        } else {
          result += j * 100;
        }
        box[j] -= 3;
      }
  
      if (j === 1) {
        result += box[j] >= 1 ? box[j] * 100 : 0;
      } else if (j === 5) {
        result += box[j] >= 1 ? box[j] * 50 : 0;
      }
    }
  
    return result;
  }

console.log(score([2, 3, 4, 6, 2])) // 0
console.log(score([4, 4, 4, 3, 3])) // 400
console.log(score([2, 4, 4, 5, 4])) // 450