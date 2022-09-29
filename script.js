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
  passLength: 0,
  options: [],
  password: '',

  //object methods
  // sets length of password
  setLength: function () {
    this.passLength = prompt('How many characters would you like you password to have?');
    if (this.passLength < 8) {
      alert('Length must be at least 8 characters');
      this.setLength();
    }
    if (this.passLength > 128) {
      alert('Length must not exceed 128 characters');
      this.setLength();
    }
  },

  //sets conditions for the password
  setAttributes: function () {
    this.options[0] = confirm('Click OK to use special characters');
    this.options[1] = confirm('Click OK to use numeric characters');
    this.options[2] = confirm('Click OK to use upper case characters');
    this.options[3] = confirm('Click OK to use lower case characters');

    if (!(this.options.includes(true))) {
      alert('You must use atleast one option');
      this.setAttributes();
    }
    console.log(this.options);
  },

  // generate a single character depending on the options chosen
  generateChar: function () {

    //choose which options to generate a character for
    //if a chosen option was not confirmed by the user, choose a new random option to generate for
    var x = Math.floor(Math.random() * 4);
    while(!this.options[x]) {
      x = Math.floor(Math.random() * 4);
    }
    
    // generate the corresponding character
    switch (x) {
      case 0: // if special characters are part of the password
        return this.generateSpecial();
        
      case 1: // if numeric characters are part of the password
        return this.generateNumeric();
      
      case 2: // if upper case characters are part of the password
        return this.generateUppers();
        
      case 3: // if lower case characters are part of the password
        return this.generateLowers();
        
    }
  },

  generateSpecial: function () {
    // dont include ' " or \ to prevent bugs
    let specials = " !#$%&()*+,-./:;<=>?@[]^_`{|}~";
    return specials[Math.floor(Math.random() * specials.length)];
  },
  generateNumeric: function() {
    let numbers = '0123456789';
    return numbers[Math.floor(Math.random() * numbers.length)];
  },
  generateUppers: function() {
    let uppers = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    return uppers[Math.floor(Math.random() * uppers.length)];
  },
  generateLowers: function() {
    let lowers = 'abcdefghijklmnopqrstuvwxyz';
    return lowers[Math.floor(Math.random() * lowers.length)];
  }
};

function generatePassword() {
  passwordObj.setLength();
  passwordObj.setAttributes();
  console.log(passwordObj.useSpecial);
  console.log(passwordObj.useNum);
  console.log(passwordObj.useUpper);
  console.log(passwordObj.useLower);
  console.log(passwordObj.options);
  var passw = "";
  for (var i = 0; i < passwordObj.passLength; i++) {
    console.log('char' + i);
    var ch = passwordObj.generateChar();
    console.log(ch);
    passw = passw + ch;
    // console.log(passw);
  }
  console.log('password: ' + passw);
  return passw;
}