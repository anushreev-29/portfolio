document.addEventListener("DOMContentLoaded", () => {
  /* ==========================================================================
     1. DARK MODE TOGGLE
     ========================================================================== */
  (function () {
  const button = document.querySelector("#themeToggle");

  function applyTheme(theme) {
    if (theme === "dark") {
      document.body.classList.add("dark");
      if (button) button.textContent = "☀️";
    } else {
      document.body.classList.remove("dark");
      if (button) button.textContent = "🌙";
    }
  }

  // Load the saved theme (if the browser allows storage)
  let savedTheme = "light";
  try {
    savedTheme = localStorage.getItem("portfolio-theme") || "light";
  } catch (error) {
    savedTheme = "light";
  }
  applyTheme(savedTheme);

  if (!button) return;

  button.addEventListener("click", () => {
    const newTheme = document.body.classList.contains("dark") ? "light" : "dark";
    applyTheme(newTheme);

    try {
      localStorage.setItem("portfolio-theme", newTheme);
    } catch (error) {
      // Storage blocked: the theme still changes for this visit
    }
  });
})();
  /* ==========================================================================
     2. SMOOTH SCROLLING FOR NAVIGATION LINKS
     ========================================================================== */
  const navLinks = document.querySelectorAll(".nav-links a");

  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link.getAttribute("href");
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    });
  });

  /* ==========================================================================
     3. BACK TO TOP BUTTON
     ========================================================================== */
  // Create and append the button if it doesn't already exist
  let backToTopBtn = document.getElementById("back-to-top");
  if (!backToTopBtn) {
    backToTopBtn = document.createElement("button");
    backToTopBtn.id = "back-to-top";
    backToTopBtn.textContent = "↑";
    backToTopBtn.setAttribute("aria-label", "Back to top");
    document.body.appendChild(backToTopBtn);
  }

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      backToTopBtn.classList.add("show-btn");
    } else {
      backToTopBtn.classList.remove("show-btn");
    }
  });

  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
});
