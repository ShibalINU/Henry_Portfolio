
// Cursor Glow
const glow = document.getElementById("cursorGlow");
document.addEventListener("mousemove", e => {
  glow.style.left = e.clientX + "px";
  glow.style.top = e.clientY + "px";
});

// Scroll Animation
const faders = document.querySelectorAll('.fade');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
});
faders.forEach(el => observer.observe(el));

// Parallax
window.addEventListener("scroll", () => {
  let offset = window.scrollY * 0.3;
  document.getElementById("parallaxText").style.transform =
    `translateY(${offset}px)`;
});

// Dark/Light Toggle
function toggleTheme() {
  document.body.classList.toggle("light");
}
