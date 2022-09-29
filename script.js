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

var passwordObj = {
  // object attributes
  passLength: undefined,
  specialChars: undefined,
  numericChars: undefined,
  upperCase: undefined,
  lowerCase: undefined,
  password: '',

  //object methods
  setLength: function() {
    this.passLength = prompt('How many characters would you like you password to have?');
    if (this.passLength < 8) {
      alert('Length must be at least 8 characters');
      setLength();
    }
    if (this.passLength > 128) {
      alert('Length must not exceet 128 characters');
      setLength();
    }
  },
  setAttributes: function() {
    this.specialChars = confirm('Click OK to use special characters');
    this.numericChars = confirm('Click OK to use numeric characters');
    this.upperCase = confirm('Click OK to use upper case characters');
    this.lowerCase = confirm('Click OK to use lower case characters');
    if (!(this.specialChars || this.numericChars || this.upperCase || this.lowerCase)) {
      alert('You must use atleast one option');
      setAttributes();
    }
  },
  generateChar: function() {
    return;
  }
}

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
  }  else if (passLength > 128) {
    alert('password must be less than 128 characters');
    return;
  }
  
  // confirm which password criteria the user wants
  // add them to an array so we can which which ones are true
  // var passCriterias = []
  // var specialChar = confirm('Do you want special characters?');
  // console.log(specialChar);
  // passCriterias.push(specialChar);
  // var numericChar = confirm('Do you want numeric characers?');
  // console.log(numericChar);
  // passCriterias.push(numericChar);
  // var lowerCase = confirm('Do you want lower case characters?');
  // console.log(lowerCase);
  // passCriterias.push(lowerCase);
  // var upperCase = confirm('Do you want upper case characters?');
  // console.log(upperCase);
  // passCriterias.push(upperCase)


  console.log(passCriterias)
  // There needs to be atleast 1 kind of criteria selected,
  // If there isn't atleast 1 criteria chosen, end the function

}