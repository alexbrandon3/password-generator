// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword(arrLC, arrUC, arrNUM, arrSP) {
  var passwordArr = generatePassword(arrLC, arrUC, arrNUM, arrSP);
  var passwordText = document.querySelector("#password");
  console.log(passwordArr, typeof passwordArr);
  var password = passwordArr.join("");
  passwordText.value = password;
  guaranteedArr.length = 0;
  passwordArr.length = 0;
}

let charTotal;
var availableCharArray = [];
var lowercaseChars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercaseChars = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specChars = ["+", "-", "&", "|", "!", "(", ")", "{", "}", "[", "]", "^","~", "*", "?", ":","\"",];
var guaranteedArr = [];
var passwordArray = [];

function getCharTotal(){
  var numOfChars = prompt('How many characters would you like your password to contain?');
  if (numOfChars === null){
    return null;
  }
  else if (numOfChars < 8 || numOfChars > 128){
    var decision = confirm('Your password must be between 8 and 128 characters in length. Would you like to continue?');
      if(decision){
        getCharTotal();
      }
      else{
        return null;
      }
  }
  else{
    return numOfChars;
  }
}

function requestCharInfo(charStyle){
  var isIncluded = confirm('Would you like your password to include ' + charStyle + '?');
  if(isIncluded){
    return true;
  }
  else{
    return false;
  }
}

function generatePassword(arrLC, arrUC, arrNUM, arrSP){
  if(arrLC){
    availableCharArray = availableCharArray.concat(lowercaseChars);
    guaranteedArr.push(lowercaseChars[Math.floor(Math.random() * lowercaseChars.length)])
  }
  if(arrUC){
    availableCharArray = availableCharArray.concat(uppercaseChars);
    guaranteedArr.push(uppercaseChars[Math.floor(Math.random() * uppercaseChars.length)])
  }
  if(arrNUM){
    availableCharArray = availableCharArray.concat(numbers);
    guaranteedArr.push(numbers[Math.floor(Math.random() * numbers.length)])
  }
  if(arrSP){
    availableCharArray = availableCharArray.concat(specChars);
    guaranteedArr.push(specChars[Math.floor(Math.random() * specChars.length)])
  }
  passwordArray = guaranteedArr;
  for(let i = guaranteedArr.length; i < charTotal; i++){
    var j = Math.floor(Math.random() * availableCharArray.length);
    passwordArray.push(availableCharArray[j]);
    }
  return passwordArray;
}

function createPassword(){
  charTotal = getCharTotal();
  if(charTotal === null){
    return null;
  }
  var lowerInclusion = requestCharInfo('lowercase characters'); //Could these be made to global variables?
  var upperInclusion = requestCharInfo('uppercase characters');
  var numberInclusion = requestCharInfo('numbers');
  var specialInclusion = requestCharInfo('special characters');
  if(lowerInclusion === false && upperInclusion === false && numberInclusion === false && specialInclusion === false){
    confirm('You must choose at least one character type to continue. Please click the button again to restart.');
  }
  else{
    var finalPrompt = confirm('Thanks for your input. Your secure random password will be generated momentarily.');
    if(!finalPrompt){
      return null;
    }
  }
  writePassword(lowerInclusion, upperInclusion, numberInclusion, specialInclusion);
}

// Add event listener to generate button
generateBtn.addEventListener("click", createPassword);