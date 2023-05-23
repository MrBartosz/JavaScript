function findNb(m) {
    let n = 0;
    let volume = 0;
  
    while (volume < m) {
      n++;
      volume += Math.pow(n, 3);
    }
  
    return volume === m ? n : -1;
  }

console.log(findNb(1071225));  // Output: 45
console.log(findNb(91716553919377));  // Output: -1
console.log(findNb(4183059834009));  // Output: 2022
console.log(findNb(24723578342962));  // Output: -1
console.log(findNb(135440716410000));  // Output: 4824
console.log(findNb(40539911473216));  // Output: 3568