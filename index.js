
const passwordTxt = document.getElementById("password");
const length = document.getElementById("length-el");
const incNumbers = document.getElementById("numbers");
const incSymbols = document.getElementById("symbols");
const generateBtn = document.getElementById("generate-el");
let passwordTwo = document.getElementById("password-two")
let incUppercs = document.getElementById('uppercase')


const alpha = "abcdefghijklmnopqrstuvwxyz";
const beta = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const numbers = "0123456789";
const symbols = "!@#$%^&*_-+=?/,.<>;:";


generateBtn.addEventListener("click", () => {
  let characters = alpha;
  incNumbers.checked ? (characters += numbers) : "";
  incSymbols.checked ? (characters += symbols) : "";
  incUppercs.checked ? (characters += beta) : "";
  passwordTxt.value = genPassword(length.value, characters);
});

const genPassword = (length, characters) => {
  let password = "";
  let password2 = "";
  for (let i = 0; i < length; i++) {
    password += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
     password2 += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }
  passwordTxt.textContent = password
  passwordTwo.textContent = password2
};

const resetPassword = ()=>{
  passwordTxt = ""
  passwordTwo = ""
}

document.getElementById('resetBtn').addEventListener(onclick, resetPassword)

function copyElementText(id) {
    var text = document.getElementById(id).innerText;
    var elem = document.createElement("textarea");
    document.body.appendChild(elem);
    elem.value = text;
    elem.select();
    document.execCommand("copy");
    document.body.removeChild(elem);
    alert("Copied!")
}


