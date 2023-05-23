function likes(names) {
    const length = names.length;
  
    switch (length) {
      case 0:
        return 'no one likes this';
      case 1:
        return `${names[0]} likes this`;
      case 2:
        return `${names[0]} and ${names[1]} like this`;
      case 3:
        return `${names[0]}, ${names[1]} and ${names[2]} like this`;
      default:
        return `${names[0]}, ${names[1]} and ${length - 2} others like this`;
    }
  }

console.log(likes([])); // no one likes this
console.log(likes(['John'])); // John likes this
console.log(likes(['John', 'Emily'])); // John and Emily like this
console.log(likes(['John', 'Emily', 'Michael'])); // John, Emily and Michael like this
console.log(likes(['John', 'Emily', 'Michael', 'Sarah'])); // John, Emily and 2 others like this
console.log(likes(['John', 'Emily', 'Michael', 'Sarah', 'David'])); // John, Emily and 3 others like this