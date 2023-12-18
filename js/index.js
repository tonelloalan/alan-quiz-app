const bookmarkIcon = document.querySelector("[data-js=bookmark-icon]");
// console.log(bookmarkIcon);

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
