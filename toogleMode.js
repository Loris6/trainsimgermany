function initThemeToggle() {
  const btn = document.getElementById("toogler");
  if (!btn) return;
  
  /* Theme beim Laden setzen */
  if (localStorage.getItem("theme") === "night") {
    document.body.classList.add("Night");
  }
  
  updateThemeIcon();
  
  /* Click Event */
  btn.addEventListener("click", () => {
    const night = document.body.classList.toggle("Night");
    localStorage.setItem("theme", night ? "night" : "day");
    updateThemeIcon();
  });
}

function updateThemeIcon() {
  const icon = document.querySelector("#toogler i");
  if (!icon) return;
  
  icon.setAttribute(
    "data-lucide",
    document.body.classList.contains("Night") ? "sun" : "moon"
  );
  
  lucide.createIcons();
}