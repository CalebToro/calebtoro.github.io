document.addEventListener("DOMContentLoaded", function () {
  const currentYear = document.querySelector(".current-year");
  if (currentYear) {
    currentYear.textContent = String(new Date().getFullYear());
  }

  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".primary-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      const open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(open));
    });
  }
});
