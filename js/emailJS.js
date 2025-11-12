 //  Initialize EmailJS with  Public Key
emailjs.init("zuMZux925Kd8LUgnz");

// Handle the form submission
const contactForm = document.querySelector("#contactForm");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent page reload

  emailjs
    .sendForm("service_r9iamh8", "template_xz6i1nx", contactForm)
    .then(() => {
      alert("✅ Message sent successfully!");
      contactForm.reset(); // Clear the form
    })
    .catch((error) => {
      alert("❌ Failed to send message: " + error.text);
    });
});
