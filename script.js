// 1. MENU MOBILE TOGGLE
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");
const menuIcon = menuToggle.querySelector("i");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  if (navLinks.classList.contains("open")) {
    menuIcon.classList.replace("fa-bars", "fa-times");
  } else {
    menuIcon.classList.replace("fa-times", "fa-bars");
  }
});

// Fecha o menu mobile ao clicar em qualquer link
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuIcon.classList.replace("fa-times", "fa-bars");
  });
});

// 2. EFEITO TYPEWRITER (MÁQUINA DE ESCREVER)
const roles = ["Full Stack Developer", "React Specialist", "UI/UX Enthusiast"];
const typewriterElement = document.getElementById("typewriter");

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  const currentRole = roles[roleIndex];

  if (!isDeleting) {
    typewriterElement.textContent = currentRole.substring(0, charIndex + 1);
    charIndex++;

    if (charIndex === currentRole.length) {
      isDeleting = true;
      setTimeout(typeEffect, 1500);
      return;
    }
  } else {
    typewriterElement.textContent = currentRole.substring(0, charIndex - 1);
    charIndex--;

    if (charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
    }
  }

  setTimeout(typeEffect, isDeleting ? 50 : 120);
}

typeEffect();

// 3. ANIMAÇÃO AO ROLAR A PÁGINA (SCROLL REVEAL)
const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

revealElements.forEach((el) => revealObserver.observe(el));

// 4. ENVIO DO FORMULÁRIO DE CONTATO
const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Message sent successfully!");
  contactForm.reset();
});

// 5. ANO ATUAL NO RODAPÉ
document.getElementById("year").textContent = new Date().getFullYear();