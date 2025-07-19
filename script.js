const about_button = document.querySelector("#abt");
const about = document.querySelector(".about");
const ach_button = document.querySelector("#achivements");
const ach = document.querySelector(".achivements");
const home = document.querySelector(".staring_page");
about_button.addEventListener("click", () => {
  console.log("About button clicked");
  if (about.classList.contains("hidden")) {
    // ach.classList.add("hidden");
    home.classList.add("hidden");
    about.classList.remove("hidden");
  } else {
    home.classList.remove("hidden");
    about.classList.add("hidden");
  }
});
