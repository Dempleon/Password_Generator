// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword(); //create the generatePassword Function
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  // prompt the user for the length of the desired password
  // password must be over 8 characters long
  passLength = prompt("How many characters would you like your password to contain?");
  // check to see if the user input is a number
  if (isNaN(passLength)) {
    alert('Not a number');
    return;
  } else if (passLength < 8) {
    alert('password less than 8');
    return;
  } 
  
  // confirm which password criteria the user wants
  var specialChar = confirm('Do you want special characters?');
  console.log(specialChar);
  var numericChar = confirm('Do you want numeric characers?');
  console.log(numericChar);
  var lowerCase = confirm('Do you want lower case characters?');
  console.log(lowerCase);
  var upperCase = confirm('Do you want upper case characters?');
  console.log(upperCase);

}