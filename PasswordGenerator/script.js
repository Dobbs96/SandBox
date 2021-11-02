// GLOBAL
const generateBTN = document.querySelector("#generate");
const copyBTN = document.querySelector("#copy");
const textArea = document.querySelector("#password");
const hasLowerCase = document.querySelector("#lower-case");
const hasUpperCase = document.querySelector("#upper-case");
const hasNumbers = document.querySelector("#numbers");
const hasSpecialCharacters = document.querySelector("#special-characters");

// used Chars

const specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

const numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

const lowerCasedCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

const upperCasedCharacters = lowerCasedCharacters.map((char) =>
  char.toUpperCase()
);

//myFunc
function getRandom(arr) {
  const randIndex = Math.floor(Math.random() * arr.length);
  const randElement = arr[randIndex];

  return randElement;
}

const generatedPassword = () => {
  let selectCharacters = [];
  let givenCharacters = [];
  if (
    hasLowerCase.checked === false &&
    hasUpperCase.checked === false &&
    hasNumbers.checked === false &&
    hasSpecialCharacters.checked === false
  ) {
    return (selectCharacters = "You must Choose one above!");
  }
  let num = Math.floor(Math.random() * (128 - 8 + 1)) + 8;
  while (num > 0) {
    if (hasLowerCase.checked) {
      givenCharacters = givenCharacters.concat(lowerCasedCharacters);
      selectCharacters.push(getRandom(lowerCasedCharacters));
      num--;
    }
    if (hasUpperCase.checked) {
      givenCharacters = givenCharacters.concat(upperCasedCharacters);
      selectCharacters.push(getRandom(upperCasedCharacters));
      num--;
    }
    if (hasNumbers.checked) {
      givenCharacters = givenCharacters.concat(numericCharacters);
      selectCharacters.push(getRandom(numericCharacters));
      num--;
    }
    if (hasSpecialCharacters.checked) {
      givenCharacters = givenCharacters.concat(specialCharacters);
      selectCharacters.push(getRandom(specialCharacters));
      num--;
    }
  }
  return selectCharacters.join("");
};

const writePassword = () => {
  let password = generatedPassword();
  textArea.value = password;
};

const copyText = () => {
  textArea.select();
  textArea.setSelectionRange(0, 999);
  if (!textArea.value) {
    return alert("Please Generate a Password First!");
  }
  navigator.clipboard.writeText(textArea.value);
  alert("Password copied to clipboard!");
};

generateBTN.addEventListener("click", writePassword);
copyBTN.addEventListener("click", copyText);
