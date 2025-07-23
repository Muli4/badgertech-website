function toggleMenu() {
  const nav = document.querySelector(".main-nav ul");
  nav.classList.toggle("show");
}

function toggleWhatsAppWidget() {
  const widget = document.getElementById("whatsappWidget");
  widget.style.display = widget.style.display === "block" ? "none" : "block";
}

function sendWhatsAppMessage() {
  const input = document.getElementById("whatsappInput");
  const message = input.value.trim();

  if (message === "") {
    alert("Please type a message before sending.");
    return;
  }

  const phoneNumber = "254741591327";
  const encodedMessage = encodeURIComponent(message);
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  // Open WhatsApp
  window.open(whatsappURL, "_blank");

  // Optional: clear input
  input.value = "";
}

  document.addEventListener("DOMContentLoaded", function () {
    const currentPage = window.location.pathname.split("/").pop() || "index.html";
    const navLinks = document.querySelectorAll(".main-nav a");

    navLinks.forEach(link => {
      const linkHref = link.getAttribute("href");
      if (linkHref === currentPage) {
        link.classList.add("active");
      }
    });
  });

  document.querySelectorAll(".faq-question").forEach(btn => {
    btn.addEventListener("click", () => {
      const answer = btn.nextElementSibling;
      const isActive = btn.classList.contains("active");

      document.querySelectorAll(".faq-question").forEach(q => {
        q.classList.remove("active");
        q.nextElementSibling.style.maxHeight = null;
        q.nextElementSibling.classList.remove("fade-expand");
      });

      if (!isActive) {
        btn.classList.add("active");
        answer.style.maxHeight = answer.scrollHeight + "px";
        answer.classList.add("fade-expand");
      }
    });
  });