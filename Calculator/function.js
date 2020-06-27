// get all the buttons
const btn9 = document.querySelector(".num-9");
const btn8 = document.querySelector(".num-8");
const btn7 = document.querySelector(".num-7");
const btn6 = document.querySelector(".num-6");
const btn5 = document.querySelector(".num-5");
const btn4 = document.querySelector(".num-4");
const btn3 = document.querySelector(".num-3");
const btn2 = document.querySelector(".num-2");
const btn1 = document.querySelector(".num-1");
const btn0 = document.querySelector(".num-0");
const btnAdd = document.querySelector(".add");
const btnMinus = document.querySelector(".minus");
const btnProduct = document.querySelector(".product");
const btnDivide = document.querySelector(".divide");
const btnClear = document.querySelector(".all-clear");
const btnEquate = document.querySelector(".equate");

// Get the input field
const inputField = document.querySelector(".input-field");

btn9.addEventListener("click", () => {
  inputField.value = inputField.value + "9";
});

btn8.addEventListener("click", () => {
  inputField.value = inputField.value + "8";
});

btn7.addEventListener("click", () => {
  inputField.value = inputField.value + "7";
});

btn6.addEventListener("click", () => {
  inputField.value = inputField.value + "6";
});

btn5.addEventListener("click", () => {
  inputField.value = inputField.value + "5";
});

btn4.addEventListener("click", () => {
  inputField.value = inputField.value + "4";
});

btn3.addEventListener("click", () => {
  inputField.value = inputField.value + "3";
});

btn2.addEventListener("click", () => {
  inputField.value += "2";
});

btn1.addEventListener("click", () => {
  inputField.value = inputField.value + "1";
});

btn0.addEventListener("click", () => {
  inputField.value = inputField.value + "0";
});

btnClear.addEventListener("click", () => {
  inputField.value = "";
});

btnAdd.addEventListener("click", () => {
  inputField.value += "+";
});

btnMinus.addEventListener("click", () => {
  inputField.value += "-";
});

btnProduct.addEventListener("click", () => {
  inputField.value += "*";
});

btnDivide.addEventListener("click", () => {
  inputField.value += "/";
});

btnEquate.addEventListener("click", () => {
  inputField.value = eval(inputField.value);
});
