const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("#site-nav");
const header = document.querySelector(".site-header");
const navLinks = document.querySelectorAll('#site-nav a[href^="#"]');
const yearNode = document.querySelector("#year");

if (yearNode) {
  yearNode.textContent = new Date().getFullYear();
}

if (menuToggle && nav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (nav && nav.classList.contains("open")) {
      nav.classList.remove("open");
      menuToggle?.setAttribute("aria-expanded", "false");
    }
  });
});

const sections = document.querySelectorAll("main section[id]");

const markActiveLink = () => {
  const checkpoint = window.scrollY + 120;
  let currentId = "";

  sections.forEach((section) => {
    if (checkpoint >= section.offsetTop) {
      currentId = section.id;
    }
  });

  navLinks.forEach((link) => {
    const isActive = link.getAttribute("href") === `#${currentId}`;
    link.classList.toggle("active", isActive);
  });
};

const updateHeaderState = () => {
  if (!header) {
    return;
  }
  header.classList.toggle("scrolled", window.scrollY > 12);
};

window.addEventListener("scroll", markActiveLink, { passive: true });
window.addEventListener("scroll", updateHeaderState, { passive: true });
window.addEventListener("load", () => {
  markActiveLink();
  updateHeaderState();
});
