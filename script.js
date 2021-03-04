var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);


// Arrays

var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var confirmLength = "";
var confirmSpecialCharacter;
var confirmNumber;
var confirmLowerCase;
var confirmUpperCase;


// User choices for password specifics, via prompts

  var confirmLength = prompt("How many characters will the password be? Enter a number between 8 and 128");
    alert(`Your password will have ${confirmLength} characters`);
  
  var confirmLowerCase = confirm("Click OK to include lowercase characters");
  var confirmUpperCase = confirm("Click OK to confirm to include uppercase characters");
  var confirmSpecialCharacter = confirm("Click OK to include special characters");
  var confirmNumber = confirm("Click OK to include numbers");    


// Generate Password

var passwordCharacters = []

if (confirmLowerCase) {
  passwordCharacters = passwordCharacters.concat(uppercase)
}
if (confirmUpperCase) {
  passwordCharacters = passwordCharacters.concat(lowercase)
}
if (confirmSpecialCharacter) {
  passwordCharacters = passwordCharacters.concat(specialChar)
}
if (confirmNumber) {
  passwordCharacters = passwordCharacters.concat(number)
}


console.log(passwordCharacters)

var randomPassword = ""

for (var i = 0; i < confirmLength; i++) {
  randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
  console.log(randomPassword)
}
return randomPassword;

// Write password
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
