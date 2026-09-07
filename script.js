// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Reveal-on-scroll
const revealTargets = document.querySelectorAll(".section, .hero");
revealTargets.forEach((el) => el.classList.add("reveal"));

const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        io.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);
revealTargets.forEach((el) => io.observe(el));

// Active nav link highlight
const links = [...document.querySelectorAll(".nav-links a")];
const sections = links
  .map((a) => document.querySelector(a.getAttribute("href")))
  .filter(Boolean);

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
