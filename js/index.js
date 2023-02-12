const menuBar = document.getElementById("menu-bar");
const navMenu = document.getElementById("nav-menu");
menuBar.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

const nav = document.getElementById("nav");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    nav.classList.add("scroll");
  } else {
    nav.classList.remove("scroll");
    nav.style.scrollBehavior = "smooth";
  }
});

const home = document.getElementById("home-back");
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
      home.style.display='flex'
} else {
    home.style.display='none'
  }
});
