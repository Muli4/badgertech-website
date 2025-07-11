// === Sticky Header Hide/Show on Scroll ===
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

// === Team Carousel Scroller ===
function scrollTeam(direction) {
  const container = document.getElementById("team-carousel");
  const scrollAmount = 270;
  container.scrollBy({
    left: scrollAmount * direction,
    behavior: "smooth"
  });
}

// === Mobile Nav Toggle ===
function toggleMenu() {
  const nav = document.getElementById("main-nav").querySelector("ul");
  nav.classList.toggle("show");
}

// === Scroll Animation (Intersection Observer with visibility fix) ===
const elementsToAnimate = document.querySelectorAll('.fade-in, .fade-up, .animate');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      observer.unobserve(entry.target); // stop watching once shown
    }
  });
}, {
  threshold: 0.01
});

elementsToAnimate.forEach(el => {
  observer.observe(el);

  // Immediately show if already in viewport on load
  const rect = el.getBoundingClientRect();
  if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
    el.classList.add('show');
  }
});

// === Hero Slider ===
let currentSlide = 0;
const slides = document.querySelectorAll(".slide");

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    if (i === index) slide.classList.add("active");
  });
}

// Initialize first slide
showSlide(currentSlide);

function changeSlide(step) {
  currentSlide = (currentSlide + step + slides.length) % slides.length;
  showSlide(currentSlide);
}

// Auto slide every 7 seconds
setInterval(() => changeSlide(1), 7000);

// === Floating Chat Toggle ===
function toggleChat() {
  const chatBox = document.getElementById("chatbot-box");
  chatBox.style.display = (chatBox.style.display === "flex") ? "none" : "flex";
}

// === Chat Bot Logic ===
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

  // Add user message
  const userMsg = document.createElement("div");
  userMsg.className = "chat-message user";
  userMsg.textContent = questions[index];
  chatBody.appendChild(userMsg);

  // Add bot response
  setTimeout(() => {
    const botMsg = document.createElement("div");
    botMsg.className = "chat-message bot";
    botMsg.textContent = answers[index];
    chatBody.appendChild(botMsg);
    chatBody.scrollTop = chatBody.scrollHeight;

    // Play sound
    if (sound && typeof sound.play === "function") {
      sound.play().catch(() => {});
    }
  }, 500);
}

// === Clear Chat Button ===
function clearChat() {
  const chatBody = document.getElementById("chat-body");
  chatBody.innerHTML = '<div class="chat-message bot">👋 Hello! How can I help you today?</div>';
}
