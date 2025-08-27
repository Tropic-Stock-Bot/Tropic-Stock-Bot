const toggleBtn = document.getElementById("theme-toggle");

function updateThemeIcon() {
  if (document.body.classList.contains("dark-mode")) {
    toggleBtn.textContent = "🌞";
  } else {
    toggleBtn.textContent = "🌙";
  }
}

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  updateThemeIcon();
});

updateThemeIcon();
