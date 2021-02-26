'use strict';

const inputElm = document.querySelector("#password-input");
const inputVisibleElm = document.querySelector("#password-visible");
const buttonElm = document.querySelector("#password-button");

const showHideInputValue = () => {
  if (inputElm.type === "password") {
    inputElm.type = "text";
    inputVisibleElm.src = "/images/eye-closed.svg"
  } else {
    inputElm.type = "password";
    inputVisibleElm.src = "/images/eye-open.svg"
  }
}

inputVisibleElm.addEventListener("click", showHideInputValue);

const inputValue = inputElm.value;

