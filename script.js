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
    nextStringDelay: [2000, 2000],
  }).go();
}

// Initialize TypeIt when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", initTypeIt);
