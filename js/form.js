const quizForm = document.getElementById("quiz-form");

quizForm.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log(event.target.elements);
});
