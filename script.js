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

// a password object with methods to create a password, 
var passwordObj = {
  // object attributes
  passLength: 0,
  options: [],
  passPhrase: '',

  // object methods
  // sets length of passPhrase
  setLength: function () {
    this.passLength = prompt('How many characters would you like you password to have?');
    if(isNaN(this.passLength)) {
      alert('Please enter a number between 8 and 128');
      this.setLength();
    }
    if (this.passLength < 8) {
      alert('Length must be at least 8 characters');
      this.setLength();
    }
    if (this.passLength > 128) {
      alert('Length must not exceed 128 characters');
      this.setLength();
    }
  },

  //sets conditions for the passPhrase
  // options = [special, numeric, upper, lower]
  setAttributes: function () {
    this.options[0] = confirm('Click OK to use special characters');
    this.options[1] = confirm('Click OK to use numeric characters');
    this.options[2] = confirm('Click OK to use upper case characters');
    this.options[3] = confirm('Click OK to use lower case characters');

    // check if there is atleast 1 confirmed option
    if (!(this.options.includes(true))) {
      alert('You must use atleast one option');
      this.setAttributes();
    }
    // console.log(this.options);
  },

  // function to generate the desired passPhrase
  generatePass: function () {
    //Reset previous passPhrase if it exists
    this.passPhrase = '';

    // Set the length
    this.setLength();

    // Set the options
    this.setAttributes();

    //create the passPhrase
    for (var x = 0; x < this.passLength; x++) {
      this.passPhrase += this.generateChar();
    }
    return this.passPhrase;
  },

  // generate a single character depending on the options chosen
  generateChar: function () {

    //choose which options to generate a character for
    //if a chosen option was not confirmed by the user, choose a new random option to generate for
    var x = Math.floor(Math.random() * 4);
    while (!this.options[x]) {
      x = Math.floor(Math.random() * 4);
    }

    // generate the corresponding character
    switch (x) {
      case 0: // if special characters are part of the password
        let specials = " !#$%&()*+,-./:;<=>?@[]^_`{|}~"; // dont include ' " or \ to prevent bugs
        return specials[Math.floor(Math.random() * specials.length)];

      case 1: // if numeric characters are part of the password
        let numbers = '0123456789';
        return numbers[Math.floor(Math.random() * numbers.length)];

      case 2: // if upper case characters are part of the password
        let uppers = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        return uppers[Math.floor(Math.random() * uppers.length)];

      case 3: // if lower case characters are part of the password
        let lowers = 'abcdefghijklmnopqrstuvwxyz';
        return lowers[Math.floor(Math.random() * lowers.length)];
    }
  }
};

function generatePassword() {
  return passwordObj.generatePass();
}