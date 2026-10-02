const hamburger = document.getElementById("hamburger");
const nav = document.querySelector(".main-nav");

if (hamburger && nav) {
  hamburger.addEventListener("click", () => {
    nav.classList.toggle("open");
  });
}

const contactForm = document.getElementById("contactForm");
const newsletterForm = document.getElementById("newsletterForm");
const formStatus = document.getElementById("formStatus");
const newsletterStatus = document.getElementById("newsletterStatus");

if (contactForm) {
  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = contactForm.querySelector('input[name="name"]').value.trim();
    const message = contactForm.querySelector('textarea[name="message"]').value.trim();

    if (!name || !message) {
      if (formStatus) formStatus.textContent = "Please complete the required fields.";
      return;
    }

    if (formStatus) {
      formStatus.textContent = "Thank you! Your message has been sent successfully.";
    }

    contactForm.reset();
  });
}

if (newsletterForm) {
  newsletterForm.addEventListener("submit", function (event) {
    event.preventDefault();

    if (newsletterStatus) {
      newsletterStatus.textContent = "Thanks for subscribing to our newsletter.";
    }

    newsletterForm.reset();
  });
}