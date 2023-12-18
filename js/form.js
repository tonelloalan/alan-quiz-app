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

const cardContainer = document.createElement("div"); // assigned new div element to a variable
cardContainer.className = "question-card-1"; // gave style class to the card

const bookmarkImg = document.createElement("img"); // assigned new img element to a variable
bookmarkImg.className = "bookmark-img"; // gave style class to the image
bookmarkImg.src = "./resources/bookmark.png"; // gave source for the image
bookmarkImg.alt = "bookmark icon"; // gave alt text  to the image
bookmarkImg.setAttribute("data-js", "bookmark-icon"); // gave further attributes to the image

const questionText = document.createElement("h3"); // assigned new h3 element (question text) to a variable
questionText.textContent = formQuestionInput; // set the value of the new questionAnswer to show up in the new card

const answerText = document.createElement("h4"); // assigned new h4 element (answer text) to a variable
answerText.textContent = formAnswerInput; // set the value of the new answerText to show up in the new card
answerText.className = "hidden"; // add class name, assuming new answers should also initiate hidden

const answerButton = document.createElement("button"); // assigned new button element to a variable
answerButton.className = "answer-button"; // gave style class to the new button
answerButton.type = "button"; // add type to the new button element
answerButton.setAttribute("data-js", "answer-button"); // gave further attributes to the button
answerButton.textContent = "Show Answer"; // set the value of the new button text
