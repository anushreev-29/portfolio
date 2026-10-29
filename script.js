// Wait for the HTML document to finish loading before running any script
document.addEventListener("DOMContentLoaded", () => {

  /* ==========================================================================
     1. DARK MODE TOGGLE
     ========================================================================== */

  // 1a. Create the toggle button dynamically and style it
  const themeToggleBtn = document.createElement("button");
  themeToggleBtn.id = "theme-toggle";
  themeToggleBtn.innerText = "🌙 Dark";
  themeToggleBtn.setAttribute("aria-label", "Toggle Dark Mode");

  // Add the button directly into your navigation bar
  const navbar = document.querySelector(".navbar");
  if (navbar) {
    navbar.appendChild(themeToggleBtn);
  }

  // 1b. Check if the user previously chose dark mode (saved in the browser)
  const savedTheme = localStorage.getItem("portfolio-theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
    themeToggleBtn.innerText = "☀️ Light";
  }

  // 1c. Listen for clicks on the toggle button
  themeToggleBtn.addEventListener("click", () => {
    // Toggle the 'dark-mode' class on the <body> tag
    document.body.classList.toggle("dark-mode");

    // Check if dark mode is now active
    const isDark = document.body.classList.contains("dark-mode");

    // Update button text and save user preference in localStorage
    if (isDark) {
      themeToggleBtn.innerText = "☀️ Light";
      localStorage.setItem("portfolio-theme", "dark");
    } else {
      themeToggleBtn.innerText = "🌙 Dark";
      localStorage.setItem("portfolio-theme", "light");
    }
  });


  /* ==========================================================================
     2. SMOOTH SCROLLING FOR NAVIGATION LINKS
     ========================================================================== */

  // Select all anchor links inside the navigation bar
  const navLinks = document.querySelectorAll(".nav-links a");

  navLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      // Prevent the default jump behavior
      event.preventDefault();

      // Read the destination ID (for example: "#projects")
      const targetId = link.getAttribute("href");
      const targetSection = document.querySelector(targetId);

      // Smoothly scroll down to that section if it exists
      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    });
  });


  /* ==========================================================================
     3. "BACK TO TOP" BUTTON
     ========================================================================== */

  // 3a. Create the button and add it to the page
  const backToTopBtn = document.createElement("button");
  backToTopBtn.id = "back-to-top";
  backToTopBtn.innerText = "↑";
  backToTopBtn.setAttribute("aria-label", "Scroll back to top");
  document.body.appendChild(backToTopBtn);

  // 3b. Show the button when scrolling down, hide it near the top
  window.addEventListener("scroll", () => {
    // If user has scrolled down more than 300 pixels
    if (window.scrollY > 300) {
      backToTopBtn.classList.add("show-btn");
    } else {
      backToTopBtn.classList.remove("show-btn");
    }
  });

  // 3c. Scroll smoothly back to top when clicked
  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });

});
