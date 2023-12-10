//Upisivanje brojeva na ocitavanje strane
window.addEventListener("load", (e) => {
  // brojevi za pitanje
  const questionNumberOne = Math.trunc(Math.random() * 5 + 1);
  const questionNumberTwo = Math.trunc(Math.random() * 5 + 1);

  const questionFieldOne = document.querySelector(".num_1");
  const questionFieldTwo = document.querySelector(".num_2");

  questionFieldOne.textContent = questionNumberOne;
  questionFieldTwo.textContent = questionNumberTwo;

  // brojevi za odgovore
  const correctAnswer = questionNumberOne + questionNumberTwo;

  let wrongAnswerOne = Math.trunc(Math.random() * 21);
  let wrongAnswerTwo = Math.trunc(Math.random() * 21);

  wrongAnswerOne === correctAnswer ? (wrongAnswerOne += 3) : wrongAnswerOne;

  wrongAnswerTwo === correctAnswer ? (wrongAnswerTwo += 3) : wrongAnswerTwo;

  //ispisivanje brojeva u polje odgovora
  const arrOfNumber = [wrongAnswerOne, correctAnswer, wrongAnswerTwo];
  const shuffledArrOfNum = arrOfNumber.sort();

  const resultField = document.querySelectorAll(".result");

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
