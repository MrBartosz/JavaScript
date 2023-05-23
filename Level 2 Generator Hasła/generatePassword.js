function generatePassword(useSpecialChars) {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const specialChars = '!@#$%^&*()_+{}[]|\\;:\'",.<>?/~`';
  const allowedChars = useSpecialChars ? chars + specialChars : chars;
  let password = '';
  
  for (let i = 0; i < 8; i++) {
    const randomIndex = Math.floor(Math.random() * allowedChars.length);
    password += allowedChars.charAt(randomIndex);
  }
  
  if (!password.match(/[A-Z]/) || !password.match(/[a-z]/) || !password.match(/\d/) || (!useSpecialChars && password.match(/\W/))) {
    return generatePassword(useSpecialChars);
  }
  
  return password;
}

console.log(generatePassword(true)); // Losowe hasło zawierające znaki specjalne
console.log(generatePassword(false)); // Losowe hasło zawierające tylko znaki alfanumeryczne