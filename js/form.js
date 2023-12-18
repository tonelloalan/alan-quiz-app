const quizForm = document.getElementById("quiz-form");

quizForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const formElements = event.target.elements;
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);
  const formQuestionInput = data.formQuestion;
  const formAnswerInput = data.formAnswer;
  const formTagInput = data.formTag;

  console.log(data.formQuestion, data.formAnswer, data.formTag); // prints the text entered on the "Your question" form

  //   console.log(event.target.elements);
});
