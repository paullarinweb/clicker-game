"use string";

// score
let score = 1;
let countNumber = document.getElementById("countNumber");
let increment = document.getElementById("inc");

// items
let items = document.getElementsByClassName("price__item");
let btns = document.getElementsByClassName("price__btns");

let arrayItems = Array.from(items);
let arrayBtnsValue = Array.from(btns);

let strItems = arrayItems.map(function (item, index, array) {
  return item.textContent
    .split("cost")[1]
    .trim()
    .replace(/[^+\d]/g, "");
});

let strBtnsValue = arrayBtnsValue.map(function (item, index, array) {
  return item.classList[1].slice(12, 25);
});

console.log(strBtnsValue);

increment.addEventListener("click", function () {
  score > 0 ? (countNumber.innerHTML = score++) : 0;
  if (score >= 10) {
    arrayBtnsValue[0].removeAttribute("disabled");
  }
  if (score >= 150) {
    arrayBtnsValue[1].removeAttribute("disabled");
  }
  if (score >= 250) {
    arrayBtnsValue[2].removeAttribute("disabled");
  }
  if (score >= 750) {
    arrayBtnsValue[3].removeAttribute("disabled");
  }
  if (score >= 1400) {
    arrayBtnsValue[4].removeAttribute("disabled");
  }
  if (score >= 2999) {
    arrayBtnsValue[5].removeAttribute("disabled");
  }
  if (score >= 10000) {
    arrayBtnsValue[6].removeAttribute("disabled");
  }
  if (score >= 25000) {
    arrayBtnsValue[7].removeAttribute("disabled");
  }
  if (score >= 80000) {
    arrayBtnsValue[8].removeAttribute("disabled");
  }
  if (score >= 10000000) {
    arrayBtnsValue[9].removeAttribute("disabled");
  }
});
