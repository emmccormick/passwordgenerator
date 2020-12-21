// Assignment code here
function generatePassword() {
  var lowercaseBank = 'abcdefghijklmnopqrustuvwxyz'
  console.log(lowercaseBank);
  var numberBank = '0123456789'
  var characterBank = '!@#$%^&*()'
  var finalBank = ''; // abcABC123!$%  abc123 ABC123!$%
  var finalPW = '';
  
// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
  var desiredLength = window.prompt("How long do you want your password to be? Pick a number between 8 and 128.")
  desiredLength = parseInt(desiredLength)  
  if (desiredLength < 8 || desiredLength > 128 || isNaN(desiredLength)) {
      // incorrect PW length
      window.alert("Please enter a valid length");
      generatePassword();
    }
  else{
    // correct PW length entry

    // WHEN prompted for character types to include in the password
    // THEN I choose lowercase, uppercase, numeric, and/or special characters
      var lowerCase = window.confirm("Should it include lowercase letters?")
      var upperCase = window.confirm("Should it include uppercase letters?")
      var numbers = window.confirm("Should it include numbers?")
      var specChar = window.confirm("Should it include special characters?")
    // WHEN I answer each prompt
    // THEN my input should be validated and at least one character type should be selected
        if (lowerCase || upperCase || numbers || specChar) {
          if (lowerCase) {
            finalBank += lowercaseBank;
          }

          if (upperCase) {
            finalBank += lowercaseBank.toUpperCase();
          }

          if (numbers) {
            finalBank += numberBank;
          }

          if (specChar) {
            finalBank += characterBank;
          }

          // now we have the entire bank of characters available and the desired length

          // run thru loop for each character in the PW
          for (let i = 0; i < desiredLength; i++) {
            // choose random character from available bank
              // random number needs to be between 0 and length of bank
            var randomNumber = Math.floor(Math.random() * finalBank.length)
            // go to random index of finalBank and
            var randoLetter = finalBank[randomNumber]
            // concatenate that onto the finalPW
            finalPW += randoLetter;
          }
          // pass validation
          // WHEN all prompts are answered
          // THEN a password is generated that matches the selected criteria
          // WHEN the password is generated
          // THEN the password is either displayed in an alert or written to the page
          return finalPW;
        }
        else {
          // did not pass validation
          window.alert("You must pick at least one of the options");
          generatePassword();
        }
  }
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
