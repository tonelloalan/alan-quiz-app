// Add an eventlistener to the darkmode toggle button in your profile page which should toggle on a dark or light version of the profile page

const darkModeToggle = document.querySelector(".switch input"); // targeting the switch button with a new variable
const imgElements = document.querySelectorAll(".nav-bar img"); // targeting the nav bar images with a new variable

darkModeToggle.addEventListener("change", function () {
  // Toggle dark mode class on body
  document.body.classList.toggle("darkMode", this.checked);

  // Change src attribute of img elements in the nav-bar
  imgElements.forEach((img) => {
    const currentSrc = img.src;
    const fileExtensionIndex = currentSrc.lastIndexOf(".");
    const baseFileName = currentSrc.substring(0, fileExtensionIndex);
    const fileExtension = currentSrc.substring(fileExtensionIndex);
    const newSrc = this.checked
      ? baseFileName + "_white" + fileExtension
      : baseFileName.replace("_white", "") + fileExtension;

    img.src = newSrc;
  });
});
