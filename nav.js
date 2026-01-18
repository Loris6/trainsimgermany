fetch("nav.html")
  .then(res => res.text())
  .then(html => {
    document.body.insertAdjacentHTML("afterbegin", html);
    
    lucide.createIcons(); // Icons rendern
    initThemeToggle(); // Toggle aktivieren
  });