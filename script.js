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

  var navlinks = document.querySelectorAll("[navLink]");
  navlinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const navigateTo = e.target.href.split("#")[1];
      document
        .getElementById(navigateTo.toString())
        .scrollIntoView({ behavior: "smooth" });
    });
  });

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