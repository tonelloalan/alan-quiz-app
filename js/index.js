const bookmarkIcon = document.querySelector("[data-js=bookmark-icon]");
// console.log(bookmarkIcon);
const answerButton = document.querySelector("[data-js=answer-button]");

bookmarkIcon.addEventListener("click", function () {
  // Check the current source of the bookmark icon
  if (bookmarkIcon.src.endsWith("/resources/bookmark.png")) {
    //Change the source to the filled bookmark icon
    bookmarkIcon.src = "./resources/bookmark_filled.png";
  } else {
    // Change the source back to the regular bookmark icon
    bookmarkIcon.src = "./resources/bookmark.png";
  }
});

answerButton.addEventListener("click", function () {
  // Get the h4 element inside the question card
  const answerText = document.querySelector(".question-cards h4");

  // Toggle the 'hidden' class on the h4 element
  answerText.classList.toggle("hidden");

  if (answerButton.innerText === "Show Answer") {
    answerButton.innerText = "Hide Answer";
  } else {
    answerButton.innerText = "Show Answer";
  }
});
