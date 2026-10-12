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

  const themeToggle = document.querySelector(".theme-toggle");
  if (themeToggle) {
    const updateThemeToggle = function () {
      const isDark = document.documentElement.dataset.theme === "dark";
      themeToggle.setAttribute("aria-pressed", String(isDark));
      themeToggle.setAttribute(
        "aria-label",
        isDark ? "Cambiar a modo claro" : "Cambiar a modo oscuro"
      );
      themeToggle.title = isDark ? "Cambiar a modo claro" : "Cambiar a modo oscuro";
    };

    updateThemeToggle();
    themeToggle.addEventListener("click", function () {
      const nextTheme =
        document.documentElement.dataset.theme === "dark" ? "light" : "dark";
      document.documentElement.dataset.theme = nextTheme;
      localStorage.setItem("caleb-theme", nextTheme);

      const themeColor = document.querySelector('meta[name="theme-color"]');
      if (themeColor) {
        themeColor.content = nextTheme === "dark" ? "#1b2438" : "#f6f2e9";
      }

      updateThemeToggle();
    });
  }
});
