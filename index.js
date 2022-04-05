const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nv-m");

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("nv-m_visible");

  if (navMenu.classList.contains("nv-m_visible")) {
    navToggle.setAttribute("aria-label", "Cerrar menú");
  } else {
    navToggle.setAttribute("aria-label", "Abrir menú");
  }
});