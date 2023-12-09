// brojevi za pitanje
const numRandom1 = Math.trunc(Math.random() * 5 + 1);
const numRandom2 = Math.trunc(Math.random() * 5 + 1);

let numField1 = document.querySelector(".num_1");
let numField2 = document.querySelector(".num_2");

// brojevi za odgovore
const correctAnswer = numRandom1 + numRandom2;

let resRandom1 = Math.trunc(Math.random() * 21);
let resRandom2 = Math.trunc(Math.random() * 21);

const resultField = document.querySelectorAll(".result");

//Upisivanje brojeva na ocitavanje strane
window.addEventListener("load", (e) => {
  numField1.textContent = numRandom1;
  numField2.textContent = numRandom2;

  resRandom1 === correctAnswer ? (resRandom1 += 3) : resRandom1;

  resRandom2 === correctAnswer ? (resRandom2 += 3) : resRandom2;

  const arrOfNumber = [resRandom1, correctAnswer, resRandom2];

  const shuffledArrOfNum = arrOfNumber.sort();

  resultField.forEach((e) => {
    const newElement = document.createElement("p");
    newElement.textContent = shuffledArrOfNum.shift();
    e.appendChild(newElement);
    e.addEventListener("click", (e) => {
      newElement.textContent == correctAnswer
        ? newElement.classList.add("green")
        : newElement.classList.add("red");
    });
  });
});

//restartuj igru
const btn = document.querySelector(".restartGame");

btn.addEventListener("click", (e) => {
  e.preventDefault();
  location.reload();
});
