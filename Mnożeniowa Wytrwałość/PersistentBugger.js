function persistence(num) {
    if (num < 10 ) {
      return 0;
    }
   
   let result = num;
   let count = 0;
   
   while(result > 9) {
     let res = 1;
     for (let digit of result.toString().split('')) {
       res *= Number(digit)
     }
     result = res;
     count ++;
   }
    return count;
 }


console.log(persistence(39)); // 3
console.log(persistence(999)); // 4
console.log(persistence(4)); // 0
console.log(persistence(25)); // 2
console.log(persistence(888)); // 6
console.log(persistence(12345)); // 2
console.log(persistence(777)); // 4
console.log(persistence(987654321)); // 2
console.log(persistence(11)); // 1
console.log(persistence(9999)); // 2
console.log(persistence(101010)); // 3
console.log(persistence(555555)); // 5
console.log(persistence(999)); // 1
