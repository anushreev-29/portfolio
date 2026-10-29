document.addEventListener("DOMContentLoaded", () => {
  /* ==========================================================================
     1. DARK MODE TOGGLE
     ========================================================================== */
  const themeToggleBtn = document.getElementById("theme-toggle");

  // Check if user previously saved dark mode preference
  const savedTheme = localStorage.getItem("portfolio-theme");

  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
    if (themeToggleBtn) themeToggleBtn.textContent = "☀️ Light";
  }

  // Click event to toggle dark / light
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");

      if (document.body.classList.contains("dark-mode")) {
        themeToggleBtn.textContent = "☀️ Light";
        localStorage.setItem("portfolio-theme", "dark");
      } else {
        themeToggleBtn.textContent = "🌙 Dark";
        localStorage.setItem("portfolio-theme", "light");
      }
    });
  }

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
