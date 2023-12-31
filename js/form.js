const quizForm = document.getElementById("quiz-form");

quizForm.addEventListener("submit", function (event) {
  event.preventDefault();

  //   const formElements = event.target.elements;
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);
  const formQuestionInput = data.formQuestion;
  const formAnswerInput = data.formAnswer;
  const formTagInput = data.formTag;

  //   console.log(data.formQuestion, data.formAnswer, data.formTag); // prints the text entered on the "Your question" form

  //   console.log(event.target.elements);

  const cardContainer = document.createElement("div"); // assigned new div element to a variable
  cardContainer.classList.add("question-card-1"); // gave style class to the card

  const bookmarkImg = document.createElement("img"); // assigned new img element to a variable
  bookmarkImg.classList.add("bookmark-img"); // gave style class to the image
  bookmarkImg.src = "./resources/bookmark.png"; // gave source for the image
  bookmarkImg.alt = "bookmark icon"; // gave alt text  to the image
  bookmarkImg.setAttribute("data-js", "bookmark-icon"); // gave further attributes to the image

  const questionText = document.createElement("h3"); // assigned new h3 element (question text) to a variable
  questionText.textContent = formQuestionInput; // set the value of the new questionAnswer to show up in the new card

  const answerText = document.createElement("h4"); // assigned new h4 element (answer text) to a variable
  answerText.textContent = formAnswerInput; // set the value of the new answerText to show up in the new card
  answerText.classList.add("hidden"); // add class name, assuming new answers should also initiate hidden

  const answerButton = document.createElement("button"); // assigned new button element to a variable
  answerButton.classList.add("answer-button"); // gave style class to the new button
  answerButton.type = "button"; // add type to the new button element
  answerButton.setAttribute("data-js", "answer-button"); // gave further attributes to the button
  answerButton.textContent = "Show Answer"; // set the value of the new button text

  const hashtagList = document.createElement("ul"); // assigned new hashtag (ul) element to a variable
  const liElement = document.createElement("li"); // assigned new hashtag content (li) element to a variable
  liElement.textContent = formTagInput; // set the content of the hashtag text to  a new variable
  hashtagList.appendChild(liElement); // append the content of the hashtag text to the parent element (ul) as a child element

  // appending new elements to the card container
  cardContainer.appendChild(bookmarkImg);
  cardContainer.appendChild(questionText);
  cardContainer.appendChild(answerText);
  cardContainer.appendChild(answerButton);
  cardContainer.appendChild(hashtagList);

  //  append the cardContainer to the form page
  const questionCardsContainer = document.querySelector('[data-js="main"]');
  questionCardsContainer.append(cardContainer);

  answerButton.addEventListener("click", function () {
    // Get the h4 element inside the question card
    const answerText = document.querySelector(".question-card-1 h4");
    // console.log(answerButton);

    // Toggle the 'hidden' class on the h4 element
    answerText.classList.toggle("hidden");

    if (answerButton.innerText === "Show Answer") {
      answerButton.innerText = "Hide Answer";
    } else {
      answerButton.innerText = "Show Answer";
    }
  });

  event.target.reset(); // reset form fields

  // Reset character count elements
  characterLeftElementQuestion.textContent =
    MAX_CHARACTERS + " characters remaining";
  characterLeftElementAnswer.textContent =
    MAX_CHARACTERS + " characters remaining";
});

// display remaining characters for question
const MAX_CHARACTERS = 150;

const messageInputQuestion = document.querySelector(
  '[data-js="character-counter-question"]'
);

const characterLeftElementQuestion = document.querySelector(
  '[data-js="character-count-question"]'
);

messageInputQuestion.addEventListener("input", (e) => {
  characterLeftElementQuestion.textContent =
    MAX_CHARACTERS - parseInt(e.target.value.length) + " characters remaining";
});

// display remaining characters for answer

const messageInputAnswer = document.querySelector(
  '[data-js="character-counter-answer"]'
);

const characterLeftElementAnswer = document.querySelector(
  '[data-js="character-count-answer"]'
);

messageInputAnswer.addEventListener("input", (ev) => {
  characterLeftElementAnswer.textContent =
    MAX_CHARACTERS - parseInt(ev.target.value.length) + " characters remaining";
});
