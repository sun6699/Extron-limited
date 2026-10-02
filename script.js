// Extron Nigeria Limited - Website JavaScript

document.addEventListener("DOMContentLoaded", function () {

    // Mobile navigation
    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector(".nav-menu");

    if (menuToggle && navMenu) {
        menuToggle.addEventListener("click", function () {
            navMenu.classList.toggle("active");
            menuToggle.classList.toggle("active");
        });
    }

    // Close mobile menu when a navigation link is clicked
    const navLinks = document.querySelectorAll(".nav-menu a");

    navLinks.forEach(function (link) {
        link.addEventListener("click", function () {
            if (navMenu) {
                navMenu.classList.remove("active");
            }

            if (menuToggle) {
                menuToggle.classList.remove("active");
            }
        });
    });

    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(function (link) {
        link.addEventListener("click", function (event) {
            const targetId = this.getAttribute("href");

            if (targetId && targetId !== "#") {
                const target = document.querySelector(targetId);

                if (target) {
                    event.preventDefault();

                    target.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });
                }
            }
        });
    });

    // Newsletter form
    const newsletterForm = document.querySelector(".newsletter-form");

    if (newsletterForm) {
        newsletterForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const emailInput = newsletterForm.querySelector('input[type="email"]');

            if (emailInput && emailInput.value.trim() !== "") {
                alert("Thank you for subscribing to Extron Nigeria Limited.");

                emailInput.value = "";
            }
        });
    }

    // Contact form
    const contactForm = document.querySelector("#contact-form");

    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault();

            alert("Thank you for contacting Extron Nigeria Limited. We will get back to you soon.");

            contactForm.reset();
        });
    }

    // Current year in footer
    const yearElement = document.querySelector("#current-year");

    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

});