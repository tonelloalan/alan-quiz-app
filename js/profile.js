// Add an eventlistener to the darkmode toggle button in your profile page which should toggle on a dark or light version of the profile page

const darkModeToggle = document.querySelector(".switch input"); // targeting the switch button with a new variable
const imgElements = document.querySelectorAll(".nav-bar img"); // targeting the nav bar images with a new variable

darkModeToggle.addEventListener("change", function () {
  document.body.classList.toggle("darkMode", this.checked);
});
