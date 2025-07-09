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
