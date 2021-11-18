/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};

const CARD = document.querySelector("#card");
const CVC = document.querySelector("#cvc");
const AMOUNT = document.querySelector("#amount");
const FIRSTNAME = document.querySelector("#FirstName");
const LASTNAME = document.querySelector("#lastName");
const CITY = document.querySelector("#city");
const STATE = document.querySelector("#datalistOptions");
const OPTION = document.querySelectorAll("option");
const POSTALCODE = document.querySelector("#postalCode");
const MESSAGE = document.querySelector("#message");
const SUBMIT = document.querySelector("#form");
const SUCCESS = document.querySelector("#success");
const FAIL = document.querySelector("#fail");

window.onload = function() {};

// MYFORM.addEventListener("submit", e => {
//   e.preventDefault();
//   alert("no se ha enviado el formulario");
// });
// console.log(MYFORM);

const isValid = input => {
  input.classList.remove("is-invalid");
  input.classList.add("is-valid");
};

const isInvalid = input => {
  input.classList.remove("is-valid");
  input.classList.add("is-invalid");
};

const isText = text => {
  return /^[a-zñA-ZÑ-áéíóú ]*$/.test(text);
};

const isNumber = number => {
  return number % 1 == 0 && number > 0;
};

//ALGORITMO DE LUHN PARA VERIFICAR TARJETA DE CRÉDITO
const valid_credit_card = value => {
  // Accept only digits, dashes or spaces
  if (/[^0-9-\s]+/.test(value)) return false;

  // The Luhn Algorithm. It's so pretty.
  let nCheck = 0,
    bEven = false;
  value = value.replace(/\D/g, "");

  for (var n = value.length - 1; n >= 0; n--) {
    var cDigit = value.charAt(n),
      nDigit = parseInt(cDigit, 10);

    if (bEven && (nDigit *= 2) > 9) nDigit -= 9;

    nCheck += nDigit;
    bEven = !bEven;
  }

  return nCheck % 10 == 0;
};

CARD.addEventListener("focusout", () => {
  isNumber(CARD.value) ? isValid(CARD) : isInvalid(CARD);

  if (CARD.value.length <= 19 && CARD.value.length >= 16) {
    isValid(CARD);
  } else {
    isInvalid(CARD);
  }

  valid_credit_card(CARD.value) ? isValid(CARD) : isInvalid(CARD);
});

CVC.addEventListener("focusout", () => {
  isNumber(CVC.value) ? isValid(CVC) : isInvalid(CVC);
  CVC.value.length == 3 || CVC.value.length == 4
    ? isValid(CVC)
    : isInvalid(CVC);
  //2ª forma
  // if (CVC.value.length == 3 || CVC.value.length == 4) {
  //   isValid(CVC);
  // } else {
  //   isInvalid(CVC);
  // }
});

AMOUNT.addEventListener("focusout", () => {
  isNumber(AMOUNT.value) ? isValid(AMOUNT) : isInvalid(AMOUNT);
  AMOUNT.value > 0 ? isValid(AMOUNT) : isInvalid(AMOUNT);
});

FIRSTNAME.addEventListener("focusout", () => {
  isText(FIRSTNAME.value) && FIRSTNAME.value.length > 0
    ? isValid(FIRSTNAME)
    : isInvalid(FIRSTNAME);
});

LASTNAME.addEventListener("focusout", () => {
  isText(LASTNAME.value) && FIRSTNAME.value.length > 0
    ? isValid(LASTNAME)
    : isInvalid(LASTNAME);
});

CITY.addEventListener("focusout", () => {
  isText(CITY.value) && FIRSTNAME.value.length > 0
    ? isValid(CITY)
    : isInvalid(CITY);
});

let STATEVALUES = [];
for (const index in OPTION) {
  STATEVALUES.push(OPTION[index].value);
}

STATE.addEventListener("focusout", () => {
  STATEVALUES.some(ElementSelect => ElementSelect == STATE.value)
    ? isValid(STATE)
    : isInvalid(STATE);
});

POSTALCODE.addEventListener("focusout", () => {
  isNumber(POSTALCODE.value) ? isValid(POSTALCODE) : isInvalid(POSTALCODE);
  POSTALCODE.value.length == 5 ? isValid(POSTALCODE) : isInvalid(POSTALCODE);
});

MESSAGE.addEventListener("focusout", () => {
  isText(MESSAGE.value) ? isValid(MESSAGE) : isInvalid(MESSAGE);
});

SUBMIT.addEventListener("submit", event => {
  event.preventDefault();
  if (
    CARD.classList.contains("is-valid") &&
    CVC.classList.contains("is-valid") &&
    AMOUNT.classList.contains("is-valid") &&
    FIRSTNAME.classList.contains("is-valid") &&
    LASTNAME.classList.contains("is-valid") &&
    CITY.classList.contains("is-valid") &&
    STATE.classList.contains("is-valid") &&
    POSTALCODE.classList.contains("is-valid")
  ) {
    SUCCESS.classList.remove("d-none");
    SUCCESS.classList.add("d-block");
    FAIL.classList.remove("d-block");
    FAIL.classList.add("d-none");
  } else {
    FAIL.classList.remove("d-none");
    FAIL.classList.add("d-block");
    SUCCESS.classList.remove("d-block");
    SUCCESS.classList.add("d-none");
  }
});
