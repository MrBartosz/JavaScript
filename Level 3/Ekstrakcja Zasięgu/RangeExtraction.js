function solution(list) {
    list.sort((a,b) => a-b)
    let result = [];
    let start = list[0];
  
    for (let i = 0; i < list.length; i++) {
      if (list[i] + 1 !== list[i + 1]) {
        if (start === list[i]) {
          result.push(start.toString());
        } else if (start + 1 === list[i]) {
          result.push(start.toString());
          result.push(list[i].toString());
        } else {
          result.push(start.toString() + '-' + list[i].toString());
        }
        start = list[i + 1];
      }
    }
  
    return result.join(',');
  }
  
  console.log(solution([42])); // Output: "42"
  console.log(solution([10, 11])); // Output: "10,11"
  console.log(solution([5, 6, 7])); // Output: "5-7"
  console.log(solution([20, 21, 22, 23])); // Output: "20-23"
  console.log(solution([1, 3, 4, 5])); // Output: "1,3-5"
  console.log(solution([-10, -9, -8, -6, -3, -2, -1, 0, 1])); // Output: "-10--8,-6,-3-1"
  console.log(solution([1, 3, 5, 7, 9])); // Output: "1,3,5,7,9"
  console.log(solution([-5, -4, -3, -2, -1])); // Output: "-5--1"
  console.log(solution([-10, -9, -8, -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20])); // Output: "-10--8,-6,-3-1,3-5,7-11,14,15,17-20"