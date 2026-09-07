// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Reveal-on-scroll
const revealTargets = Array.from(document.querySelectorAll(".section, .hero"));
revealTargets.forEach((el) => el.classList.add("reveal"));

const reveal = (el) => el.classList.add("visible");

if ("IntersectionObserver" in window) {
  const io = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          reveal(entry.target);
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.01, rootMargin: "0px 0px -8% 0px" }
  );
  revealTargets.forEach((el) => io.observe(el));

  // Fallback: never leave content hidden.
  window.addEventListener("load", () => {
    setTimeout(() => revealTargets.forEach(reveal), 2500);
  });
} else {
  revealTargets.forEach(reveal);
}

// Active nav link highlight
const links = Array.from(document.querySelectorAll(".nav-links a"));
const sections = links
  .map((a) => document.querySelector(a.getAttribute("href")))
  .filter(Boolean);

if ("IntersectionObserver" in window && sections.length) {
  const navObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          links.forEach((l) => (l.style.color = ""));
          const active = links.find(
            (l) => l.getAttribute("href") === "#" + entry.target.id
          );
          if (active) active.style.color = "var(--text)";
        }
      });
    },
    { rootMargin: "-40% 0px -55% 0px" }
  );
  sections.forEach((s) => navObserver.observe(s));
}
