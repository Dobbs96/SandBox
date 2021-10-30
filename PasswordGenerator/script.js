// GLOBAL
const generateBTN = document.querySelector("#generate");
const copyBTN = document.querySelector("#copy");
const textArea = document.querySelector("#password");
const lowerCaseValue = document.querySelector("#lower-case");
const upperCaseValue = document.querySelector("#upper-case");
const numbersValue = document.querySelector("#numbers");
const specialCharactersValue = document.querySelector("#special-characters");

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
const generatedPassword = () => {
  if (lowerCaseValue.checked) {
    return "abc";
  }
  if (upperCaseValue.checked) {
    return "ABC";
  }
  if (numbersValue.checked) {
    return "123";
  }
  if (specialCharactersValue.checked) {
    return "!@#";
  }
  return "abcd1234";
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
