const about_button = document.querySelector("#abt");
const about = document.querySelector(".about");
const ach_button = document.querySelector("#ach");
const ach = document.querySelector(".achivements_list");
const home = document.querySelector(".staring_page");
about_button.addEventListener("click", () => {
  console.log("About button clicked");
  if (about.classList.contains("hidden")) {
    // ach.classList.add("hidden");
    ach_button.classList.remove("active");
    about_button.classList.add("active");
    home.classList.add("hidden");
    about.classList.remove("hidden");
    ach.classList.add("hidden");
    ach_button.classList.remove("active");
  } else {
    home.classList.remove("hidden");
    about.classList.add("hidden");
    about_button.classList.remove("active");
  }
});
ach_button.addEventListener("click", () => {
  console.log("Achievements button clicked");
  if (ach.classList.contains("hidden")) {
    // ach.classList.add("hidden");
    ach_button.classList.add("active");
    about_button.classList.remove("active");
    home.classList.add("hidden");
    ach.classList.remove("hidden");
    about.classList.add("hidden");
  } else {
    home.classList.remove("hidden");
    ach.classList.add("hidden");
    ach_button.classList.remove("active");
  }
});
function toggle_hidden() {}
