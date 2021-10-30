// GLOBAL
const generateBTN = document.querySelector("#generate");
const copyBTN = document.querySelector("#copy");
const textArea = document.querySelector("#password");
const haslowerCase = document.querySelector("#lower-case");
const hasupperCase = document.querySelector("#upper-case");
const hasnumbers = document.querySelector("#numbers");
const hasspecialCharacters = document.querySelector("#special-characters");

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
  let selectCharacters = "";
  let randomNumber = Math.floor(Math.random() * (128 - 8 + 1)) + 8;
  const randomCharacter = "a";
  if (
    haslowerCase.checked === false &&
    hasupperCase.checked === false &&
    hasnumbers.checked === false &&
    hasspecialCharacters.checked === false
  ) {
    return (selectCharacters = "You must Choose one above!");
  } else {
    while (randomNumber > 0) {
      selectCharacters += randomCharacter;
      randomNumber--;
    }
  }
  return selectCharacters;
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
