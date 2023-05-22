function nbYear(p0, percent, aug, p) {
    let years = 0;
    let population = p0;
    while(population < p) {
      population = population + (population * percent / 100) + aug;
      years ++;
    }
    
    return years;
  }

console.log(nbYear(1500,5,100,5000)) // 15
console.log(nbYear(2000, 2.5, 100, 3000)); // 7
console.log(nbYear(1000, 1, 50, 1500)); // 9
console.log(nbYear(5000, 10, 200, 8000)); // 4
console.log(nbYear(1200, 3.5, 75, 2000)); // 7
console.log(nbYear(800, 2, 50, 1000)); // 3
console.log(nbYear(2500, 5, 150, 4000)); // 5
console.log(nbYear(3000, 0, 0, 3000)); // 0
console.log(nbYear(100, 10, 0, 200)); // 8
console.log(nbYear(4000, 1.5, 100, 6000)); // 12
console.log(nbYear(1500, 0.5, 10, 1600)); // 6