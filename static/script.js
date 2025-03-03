// Wait for DOM to load
document.addEventListener("DOMContentLoaded", function () {
  // Navigation scroll effect
  const header = document.querySelector("header");
  const navbar = document.getElementById("navbar");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  // Mobile menu toggle
  const mobileMenu = document.getElementById("mobile-menu");
  const navMenu = document.querySelector(".nav-menu");

  mobileMenu.addEventListener("click", function () {
    mobileMenu.classList.toggle("active");
    navMenu.classList.toggle("active");

    // Toggle hamburger animation
    const bars = document.querySelectorAll(".bar");
    if (navMenu.classList.contains("active")) {
      bars[0].style.transform = "rotate(-45deg) translate(-5px, 6px)";
      bars[1].style.opacity = "0";
      bars[2].style.transform = "rotate(45deg) translate(-5px, -6px)";
    } else {
      bars[0].style.transform = "none";
      bars[1].style.opacity = "1";
      bars[2].style.transform = "none";
    }
  });

  // Close mobile menu when clicking on a nav link
  const navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      if (navMenu.classList.contains("active")) {
        mobileMenu.click();
      }
    });
  });

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        const headerHeight = header.offsetHeight;
        const targetPosition =
          targetElement.getBoundingClientRect().top + window.pageYOffset;

        window.scrollTo({
          top: targetPosition - headerHeight,
          behavior: "smooth",
        });
      }
    });
  });

  // Animate elements on scroll
  const animateOnScroll = function () {
    const elements = document.querySelectorAll(
      ".value-item, .event-card, .team-member, .gallery-item",
    );

    elements.forEach((element) => {
      const elementPosition = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (elementPosition < windowHeight - 100) {
        element.style.opacity = "1";
        element.style.transform = "translateY(0)";
      }
    });
  };

  // Set initial state for animated elements
  const elementsToAnimate = document.querySelectorAll(
    ".value-item, .event-card, .team-member, .gallery-item",
  );
  elementsToAnimate.forEach((element) => {
    element.style.opacity = "0";
    element.style.transform = "translateY(20px)";
    element.style.transition = "opacity 0.6s ease, transform 0.6s ease";
  });

  // Run animation on scroll
  window.addEventListener("scroll", animateOnScroll);
  // Run once on page load
  animateOnScroll();

  // Form submission
  const contactForm = document.getElementById("contactForm");

  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      // Get form values
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const subject = document.getElementById("subject").value;
      const message = document.getElementById("message").value;

      // Here you would typically send the form data to a server
      // For this example, we'll just show an alert
      alert(
        `Merci ${name} pour votre message ! Nous vous contacterons bientôt.`,
      );

      // Reset form
      contactForm.reset();
    });
  }
});
