let prevScrollPos = window.pageYOffset;
window.onscroll = function () {
  const currentScrollPos = window.pageYOffset;
  const header = document.getElementById("site-header");
  if (prevScrollPos > currentScrollPos) {
    header.style.top = "0";
  } else {
    header.style.top = "-80px";
  }
  prevScrollPos = currentScrollPos;
};

function scrollTeam(direction) {
  const container = document.getElementById("team-carousel");
  const scrollAmount = 270;
  container.scrollBy({
    left: scrollAmount * direction,
    behavior: "smooth"
  });
}
function toggleMenu() {
  const nav = document.getElementById("main-nav").querySelector("ul");
  nav.classList.toggle("show");
}

// Scroll animation
const elementsToAnimate = document.querySelectorAll('.fade-in, .fade-up, .animate');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, {
  threshold: 0.2
});

elementsToAnimate.forEach(el => observer.observe(el));
let currentSlide = 0;
const slides = document.querySelectorAll(".slide");

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    if (i === index) slide.classList.add("active");
  });
}

function changeSlide(step) {
  currentSlide = (currentSlide + step + slides.length) % slides.length;
  showSlide(currentSlide);
}

// Auto slide every 7 seconds
setInterval(() => changeSlide(1), 7000);

function toggleChat() {
  const chatBox = document.getElementById("chatbot-box");
  chatBox.style.display = (chatBox.style.display === "flex") ? "none" : "flex";
}

function chatBotReply(index) {
  const chatBody = document.getElementById("chat-body");
  const sound = document.getElementById("chat-sound");

  const questions = [
    "Do you offer free site visits?",
    "How fast can you respond?",
    "Do you offer staff training?",
    "Where is your office?",
    "Do you install CCTV?",
    "Do you handle schools and hospitals?",
    "How long have you been operating?"
  ];

  const answers = [
    "✅ Yes! We offer free site assessments within Nairobi and select towns.",
    "🚨 We can respond the same day or next day depending on location.",
    "👷 Absolutely. We provide fire drills and safety training for your team.",
    "📍 Our office is located on Munyu Road, P.O Box 42510 – 00100, Nairobi.",
    "📹 Yes, we install CCTV systems, access control, and remote monitoring.",
    "🏫 Yes, we work with schools, malls, hospitals, hotels, and industries.",
    "🕒 We've been in operation since 2018 and incorporated in 2024."
  ];

  // User question
  const userMsg = document.createElement("div");
  userMsg.className = "chat-message user";
  userMsg.textContent = questions[index];
  chatBody.appendChild(userMsg);

  // Bot response
  setTimeout(() => {
    const botMsg = document.createElement("div");
    botMsg.className = "chat-message bot";
    botMsg.textContent = answers[index];
    chatBody.appendChild(botMsg);
    chatBody.scrollTop = chatBody.scrollHeight;
    sound.play();
  }, 500);
}

// Clear chat
function clearChat() {
  const chatBody = document.getElementById("chat-body");
  chatBody.innerHTML = '<div class="chat-message bot">👋 Hello! How can I help you today?</div>';
}

// Auto-open after 10 seconds (homepage only)
window.addEventListener("DOMContentLoaded", () => {
  const isHomepage = window.location.pathname.endsWith("index.html") || window.location.pathname === "/";
  if (isHomepage) {
    setTimeout(() => {
      document.getElementById("chatbot-box").style.display = "flex";
    }, 10000);
  }
});
