function generatePassword(
  length,
  includeNumbers = true,
  includeSpecialChars = false
) {
  const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercase = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const specialChars = "@#$!&*";

  let allChars = uppercase + lowercase;
  if (includeNumbers) allChars += numbers;
  if (includeSpecialChars) allChars += specialChars;

  let password = uppercase[Math.floor(Math.random() * uppercase.length)]; // Ensure at least one uppercase letter

  for (let i = 1; i < length; i++) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }

  return password;
}

console.log(generatePassword(10, true, true));
