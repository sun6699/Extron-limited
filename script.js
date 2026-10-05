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
  contactForm.addEventListener("submit", async function (event) {
    event.preventDefault();

    const name = contactForm.querySelector('input[name="name"]').value.trim();
    const email = contactForm.querySelector('input[name="email"]').value.trim();
    const subject = contactForm.querySelector('input[name="subject"]').value.trim();
    const message = contactForm.querySelector('textarea[name="message"]').value.trim();

    if (!name || !email || !message) {
      if (formStatus) {
        formStatus.textContent = "Please complete all required fields.";
        formStatus.style.color = "red";
      }
      return;
    }

    // Show loading state
    if (formStatus) {
      formStatus.textContent = "Sending your message...";
      formStatus.style.color = "blue";
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          subject,
          message,
        }),
      });

      const data = await response.json();

      if (data.success) {
        if (formStatus) {
          formStatus.textContent = data.message;
          formStatus.style.color = "green";
        }
        contactForm.reset();
      } else {
        if (formStatus) {
          formStatus.textContent = data.message || "Failed to send message. Please try again.";
          formStatus.style.color = "red";
        }
      }
    } catch (error) {
      console.error("Error:", error);
      if (formStatus) {
        formStatus.textContent = "An error occurred. Please try again later.";
        formStatus.style.color = "red";
      }
    }
  });
}

if (newsletterForm) {
  newsletterForm.addEventListener("submit", async function (event) {
    event.preventDefault();

    const newsletterEmail = newsletterForm.querySelector('input[name="newsletterEmail"]').value.trim();

    if (!newsletterEmail) {
      if (newsletterStatus) {
        newsletterStatus.textContent = "Please provide a valid email address.";
        newsletterStatus.style.color = "red";
      }
      return;
    }

    // Show loading state
    if (newsletterStatus) {
      newsletterStatus.textContent = "Subscribing...";
      newsletterStatus.style.color = "blue";
    }

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          newsletterEmail,
        }),
      });

      const data = await response.json();

      if (data.success) {
        if (newsletterStatus) {
          newsletterStatus.textContent = data.message;
          newsletterStatus.style.color = "green";
        }
        newsletterForm.reset();
      } else {
        if (newsletterStatus) {
          newsletterStatus.textContent = data.message || "Failed to subscribe. Please try again.";
          newsletterStatus.style.color = "red";
        }
      }
    } catch (error) {
      console.error("Error:", error);
      if (newsletterStatus) {
        newsletterStatus.textContent = "An error occurred. Please try again later.";
        newsletterStatus.style.color = "red";
      }
    }
  });
}
