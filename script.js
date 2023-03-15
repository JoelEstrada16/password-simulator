var enter;
var numberConfirm;
var characterConfirm;
var upperConfirm;
var lowerConfirm;

var numberArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var upperCasedCharacters = ['A',
'B',
'C',
'D',
'E',
'F',
'G',
'H',
'I',
'J',
'K',
'L',
'M',
'N',
'O',
'P',
'Q',
'R',
'S',
'T',
'U',
'V',
'W',
'X',
'Y',
'Z'];
var lowerCasedLetter = ['a',
'b',
'c',
'd',
'e',
'f',
'g',
'h',
'i',
'j',
'k',
'l',
'm',
'n',
'o',
'p',
'q',
'r',
's',
't',
'u',
'v',
'w',
'x',
'y',
'z',
];
var specialCharacters = [
      '@',
      '%',
      '+',
      '\\',
      '/',
      "'",
      '!',
      '#',
      '$',
      '^',
      '?',
      ':',
      ',',
      ')',
      '(',
      '}',
      '{',
      ']',
      '[',
      '~',
      '-',
      '_',
      '.',
    ];
space = [];
var choices;

function generatePassword(){
  enter = parseInt(window.prompt('Password Length between 8 and 128'));
  if (!enter){
    window.alert("It needs a value")
  }
  else if (enter < 8 || enter > 128){
    enter = window.prompt("must be between 8 and 128")
  } else {
    numberConfirm = window.confirm("Would you like numbers in your password?")
    characterConfirm = window.confirm("Would you like characters in your password?")
    upperConfirm = window.confirm("Would ypou like capitilized letters in your password?")
    lowerConfirm = window.confirm("Would you like lower case letters in your password?")
  }
  if (!numberConfirm && !upperConfirm && !characterConfirm && !lowerConfirm){
    choices = wimdow.alert("you must choose atleast 1")
  } 
  else if (numberConfirm && characterConfirm && upperConfirm && lowerConfirm){
    choices = specialCharacters.concat(numberArr,upperCasedCharacters,lowerCasedLetter)
  }
  else if (characterConfirm && numberConfirm && upperConfirm){
    choices = specialCharacters.concat(upperCasedCharacters, numberConfirm)
  }
  else if (characterConfirm && numberConfirm && lowerConfirm){
    choices = specialCharacters.concat(numberArr, lowerCasedLetter)
  }
  else if (characterConfirm && upperConfirm && lowerConfirm){
    choices = specialCharacters.concat(upperCasedCharacters, lowerCasedLetter)
  }
  else if (upperConfirm && lowerConfirm && numberConfirm){
    choices = numberArr.concat(lowerCasedLetter, upperCasedCharacters)
  }
  else if (upperConfirm && lowerConfirm){
    choices = upperCasedCharacters.concat(lowerCasedLetter)
  }
  else if (upperConfirm && numberConfirm){
    choices = upperCasedCharacters.concat(numberArr)
  }
  else if (upperConfirm && characterConfirm){
    choices = upperCasedCharacters.concat(specialCharacters)
  }
  else if (lowerConfirm && characterConfirm){
    choices = lowerCasedLetter.concat(specialCharacters)
  }
  else if (lowerConfirm && numberConfirm){
    choices = lowerCasedLetter.concat(numberArr)
  }
  else if (numberConfirm && characterConfirm){
    choices = numberArr.concat(specialCharacters)
  }
  else if (numberConfirm){
    choices = numberArr
  }
  else if (characterConfirm){
    choices = specialCharacters
  }
  else if (upperConfirm){
    choices = upperCasedCharacters
  }
  else if (lowerConfirm){
    choices = space.concat(lowerCasedLetter)
  }
  var password = [];
  for (i = 0; i < enter; i++){
  var pickChoices = choices[Math.floor(Math.random() * choices.length)]
  password.push(pickChoices)
}
  var ps = password.join("")
  writePassword(ps);
  return ps
}


// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword(ps) {
    document.querySelector("#password").textContent = ps
}


// // Add event listener to generate button
generateBtn.addEventListener("click", function(){
  ps = generatePassword()
});
