"use strict";

// UI ELEMENTS
const buttons = document.querySelectorAll(".btn");
const display = document.querySelector(".calDisplay");
const equal = document.querySelector(".btn-equal");
const cancle = document.querySelector(".btn-cancle");

// display btn value on

buttons.forEach((button) => {
  button.addEventListener("click", function (e) {
    const btnValue = e.target.dataset.num;
    display.value += btnValue;
  });
});

// Evaluate what is displayed
equal.addEventListener("click", (e) => {
  if (display.value === "") {
    display.value = "";
  } else {
    const result = eval(display.value);
    display.value = result;
  }
});

// clear display
cancle.addEventListener("click", (e) => {
  display.value = "";
});
