const about_button = document.querySelector("#abt");
const about = document.querySelector(".about");
const ach_button = document.querySelector("#ach");
const ach = document.querySelector(".achivements_list");
const home = document.querySelector(".staring_page");
const con_button = document.querySelector("#contact");
const con = document.querySelector(".contact");
const qu_button = document.querySelector("#projects");
const qu = document.querySelector(".projects");
const home_button = document.querySelector("#home");
// const qu = document.querySelector(".projects");

home_button.addEventListener("click", () => {
  console.log("home button clicked");

  toggle_hidden();
  toggle_active();
  home_button.classList.add("active");
  home.classList.remove("hidden");
});

qu_button.addEventListener("click", () => {
  console.log("qu button clicked");

  toggle_hidden();
  toggle_active();
  qu_button.classList.add("active");
  qu.classList.remove("hidden");
});

con_button.addEventListener("click", () => {
  console.log("con button clicked");

  toggle_hidden();
  toggle_active();
  con_button.classList.add("active");
  con.classList.remove("hidden");
});

about_button.addEventListener("click", () => {
  console.log("About button clicked");

  toggle_hidden();
  toggle_active();
  about_button.classList.add("active");
  about.classList.remove("hidden");
});

ach_button.addEventListener("click", () => {
  console.log("Achievements button clicked");
  toggle_hidden();
  toggle_active();
  ach_button.classList.add("active");
  ach.classList.remove("hidden");
});

document.querySelectorAll(".achivement").forEach((item) => {
  item.addEventListener("click", () => {
    // item = achievement.querySelector(".achivement_description");
    console.log("Achievement clicked");
    if (item.classList.contains("expanded")) {
      item.classList.remove("expanded");
    } else {
      item.classList.add("expanded");
    }
  });
});

function toggle_hidden() {
  about.classList.add("hidden");
  ach.classList.add("hidden");
  home.classList.add("hidden");
  con.classList.add("hidden");
  qu.classList.add("hidden");
}
function toggle_active() {
  about_button.classList.remove("active");
  ach_button.classList.remove("active");
  qu_button.classList.remove("active");
  con_button.classList.remove("active");
  home_button.classList.remove("active");
}
