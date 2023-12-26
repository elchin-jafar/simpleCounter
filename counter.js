const numberEl = document.querySelector("p");
const decreaseBtn = document.querySelector(".decrease");
const resetBtn = document.querySelector(".reset");
const increaseBtn = document.querySelector(".increase");

let number = 0;

decreaseBtn.addEventListener("click", decrease);

resetBtn.addEventListener("click", reset);

increaseBtn.addEventListener("click", increase);

function decrease() {
  number -= 1;
  numberEl.textContent = number;
}

function reset() {
  number = 0;
  numberEl.textContent = number;
}

function increase() {
  number += 1;
  numberEl.textContent = number;
}
