const generateBTN = document.querySelector("#generate");
const copyBTN = document.querySelector("#copy");
const textArea = document.querySelector("#password");

const generatedPassword = () => {
  return "abcd1234";
};

const writePassword = () => {
  let password = generatedPassword();
  textArea.value = password;
};

const copyText = () => {
  textArea.select();
  textArea.setSelectionRange(0, 999);
  navigator.clipboard.writeText(textArea.value);
  alert("Password copied to clipboard!");
};

generateBTN.addEventListener("click", writePassword);
copyBTN.addEventListener("click", copyText);
