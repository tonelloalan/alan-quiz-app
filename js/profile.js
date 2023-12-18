// Add an eventlistener to the darkmode toggle button in your profile page which should toggle on a dark or light version of the profile page

const darkModeToggle = document.querySelector(".switch input");

darkModeToggle.addEventListener("change", function () {
  document.body.classList.toggle("darkMode", this.checked);
});
