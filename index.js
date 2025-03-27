const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
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
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

const inputEl1 = document.getElementById("input1-el");
const inputEl2 = document.getElementById("input2-el");
const btnEl = document.getElementById("generate-btn");
const passLen = 16;
let randIndex = 0;

btnEl.addEventListener("click", () => {
  inputEl1.value = genPass();
  inputEl2.value = genPass();
});

inputEl1.addEventListener("click", () => {
  myFunction(inputEl1);
});

inputEl2.addEventListener("click", () => {
  myFunction(inputEl2);
});

function myFunction(input) {
  // Get the text field

  // Select the text field
  input.select();
  input.setSelectionRange(0, 99999); // For mobile devices

  // Copy the text inside the text field
  navigator.clipboard.writeText(input.value);

  // Alert the copied text
  alert("Copied the text: " + input.value);
}

function genPass() {
  let password = "";
  for (let i = 0; i < passLen; i++) {
    randIndex = Math.floor(Math.random() * characters.length);
    //console.log(randIndex)
    password += characters[randIndex];
  }
  //console.log(password)
  return password;
}

console.log(genPass());
