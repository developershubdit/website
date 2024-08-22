// Array of quotes
const quotes = [
  "Embark on your software development journey with a trusted ally",
  "Where dreamers become developers, and creators shape the future",
  "Visionaries, architects of tomorrow, artisans of code",
  "Empowering your journey through the digital landscape",
];

// Function to initialize TypeIt
function initTypeIt() {
  new TypeIt("#quote", {
    strings: quotes,
    speed: 70,
    waitUntilVisible: true,
    loop: false,
    breakLines: false,
    nextStringDelay: [2000, 1000],
  }).go();
}

// Initialize TypeIt when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", initTypeIt);

document.addEventListener("DOMContentLoaded", function () {
  var menu = document.getElementById("menu");
  var toggleButton = document.getElementById("menuButton");
  var toggleButtonIcons = document.querySelectorAll(".menu-button");
  var topOfThePage = document.querySelector("#home");
  let navbarHeight = document.querySelector("nav").scrollHeight;

  document.querySelectorAll("section").forEach((section) => {
    section.style.paddingTop = `${navbarHeight + 5}px`;
  });

  function toTop() {
    topOfThePage.scrollIntoView({ behavior: "smooth" });
  }

  document.getElementById("toTopButton").addEventListener("click", toTop);
  // Initial state
  document.getElementById("toTopButton").style.display = "none";
  toggleButtonIcons[0].classList.add("visible-menu-button");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      document.getElementById("toTopButton").style.display = "flex";
    } else {
      document.getElementById("toTopButton").style.display = "none";
    }
  });

  function toggleScrolling(isEnabled) {
    document.body.style.overflow = isEnabled ? "auto" : "hidden";
  }

  function hideMenu() {
    menu.classList.remove("visible");
    toggleButtonIcons.forEach((icon) => {
      if (icon.classList.contains("visible-menu-button")) {
        icon.classList.toggle("fade-animation");
        setTimeout(() => icon.classList.remove("fade-animation"), 500);
      }
      icon.classList.toggle("visible-menu-button");
    });
  }

  menu.addEventListener("click", hideMenu);

  toggleButton.addEventListener("click", function () {
    toggleButtonIcons.forEach((icon) => {
      if (icon.classList.contains("visible-menu-button")) {
        icon.classList.toggle("fade-animation");
        setTimeout(() => icon.classList.remove("fade-animation"), 500);
      }
      icon.classList.toggle("visible-menu-button");
    });
    menu.classList.toggle("visible");
  });
});
