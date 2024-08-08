// Check for saved theme in localStorage
let currentTheme = localStorage.getItem("theme") || "light";
document.documentElement.setAttribute("data-theme", currentTheme);

// Update the toggle button based on the current theme
const modeToggle = document.getElementById("mode-toggle");
modeToggle.textContent = currentTheme === "dark" ? "☾" : "☼";

// Event listener for theme toggle
modeToggle.addEventListener("click", () => {
  let theme = document.documentElement.getAttribute("data-theme");
  let newTheme = theme === "light" ? "dark" : "light";
  document.documentElement.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);
  modeToggle.textContent = newTheme === "dark" ? "☾" : "☼";
});
// Toggle mobile menu
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
