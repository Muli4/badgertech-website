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
