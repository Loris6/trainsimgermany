const btn = document.getElementById('toogler');

/* Beim Laden der Seite prüfen */
if (localStorage.getItem("theme") === "Night") {
  document.body.classList.add('Night');
}

/* Button Klick */
btn.addEventListener("click", () => {
  document.body.classList.toggle('Night');
  
  /* Zustand speichern */
  if (document.body.classList.contains('Night')) {
    localStorage.setItem("theme", "Night");
  } else {
    localStorage.setItem("theme", "day");
  }
});