// Scroll-reveal (calm, serious)
const revealEls = document.querySelectorAll(".reveal");

const io = new IntersectionObserver(
  (entries) => {
    for (const e of entries) {
      if (e.isIntersecting) {
        e.target.classList.add("is-visible");
        io.unobserve(e.target);
      }
    }
  },
  { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
);

revealEls.forEach((el) => io.observe(el));

// Smooth anchor scrolling with slight offset feel
document.querySelectorAll('a[href^="#"]').forEach((a) => {
  a.addEventListener("click", (ev) => {
    const id = a.getAttribute("href");
    const target = document.querySelector(id);
    if (!target) return;

    ev.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

// Optional: subtle parallax-like depth for hero CTA (not gimmicky)
const cta = document.querySelector(".cta");
window.addEventListener("mousemove", (e) => {
  if (!cta) return;
  const { innerWidth: w, innerHeight: h } = window;
  const dx = (e.clientX / w - 0.5) * 2; // -1..1
  const dy = (e.clientY / h - 0.5) * 2; // -1..1
  cta.style.transform = `translateY(-2px) translate(${dx * 2}px, ${dy * 1.5}px)`;
});

window.addEventListener("mouseleave", () => {
  if (!cta) return;
  cta.style.transform = "";
});
