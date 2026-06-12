// ===== NAVBAR SCROLL =====
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
  navbar.classList.toggle("scrolled", window.scrollY > 50);
});

// ===== HAMBURGER MENU =====
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navLinks.classList.toggle("active");
});

// Close menu on link click
navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navLinks.classList.remove("active");
  });
});

// ===== BACK TO TOP =====
const backToTop = document.getElementById("backToTop");
window.addEventListener("scroll", () => {
  backToTop.classList.toggle("visible", window.scrollY > 500);
});

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// ===== STAT COUNTER ANIMATION =====
function animateCounters() {
  const counters = document.querySelectorAll(".stat-number");
  counters.forEach((counter) => {
    const target = +counter.getAttribute("data-target");
    const duration = 2000;
    const step = target / (duration / 16);
    let current = 0;

    const update = () => {
      current += step;
      if (current < target) {
        counter.textContent = Math.ceil(current);
        requestAnimationFrame(update);
      } else {
        counter.textContent = target;
      }
    };
    update();
  });
}

// ===== INTERSECTION OBSERVER FOR ANIMATIONS =====
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      fadeObserver.unobserve(entry.target);
    }
  });
}, observerOptions);

// Add fade-in class to elements
document
  .querySelectorAll(
    ".service-card, .advantage-card, .portfolio-item, .pricing-card, .testimonial-card, .process-step, .info-card",
  )
  .forEach((el) => {
    el.classList.add("fade-in");
    fadeObserver.observe(el);
  });

// Counter animation observer
const statsSection = document.querySelector(".hero-stats");
if (statsSection) {
  const statsObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCounters();
          statsObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 },
  );
  statsObserver.observe(statsSection);
}

// ===== SMOOTH SCROLL FOR NAV LINKS =====
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// ===== CONTACT FORM =====
const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const nama = document.getElementById("nama").value;
    const telepon = document.getElementById("telepon").value;
    const layanan = document.getElementById("layanan-select").value;
    const pesan = document.getElementById("pesan").value;

    // Build WhatsApp message
    const waMessage = `Halo GriyaItNusantara! Saya ${nama}.%0A%0ASaya tertarik dengan layanan: ${layanan}%0A%0ADetail: ${pesan}`;
    const waUrl = `https://wa.me/62895428927710?text=${waMessage}`;

    window.open(waUrl, "_blank");

    // Show success feedback
    const btn = contactForm.querySelector('button[type="submit"]');
    const originalText = btn.innerHTML;
    btn.innerHTML = '<i class="fas fa-check"></i> Pesan Terkirim!';
    btn.style.background = "#22c55e";

    setTimeout(() => {
      btn.innerHTML = originalText;
      btn.style.background = "";
      contactForm.reset();
    }, 3000);
  });
}

// ===== PRICING PACKAGE PRE-FILL =====
const packageLabels = {
  "landing-page": "Paket Landing Page",
  "bisnis-pro": "Paket Bisnis Pro",
  "web-application": "Paket Web Application",
  "aplikasi-kasir": "Aplikasi Kasir (POS)",
  "aplikasi-laundry": "Aplikasi Laundry",
  "platform-donasi": "Platform Donasi",
};

document.querySelectorAll("[data-package]").forEach((btn) => {
  btn.addEventListener("click", function () {
    const pkg = this.getAttribute("data-package");
    const select = document.getElementById("layanan-select");
    const textarea = document.getElementById("pesan");

    if (select) select.value = pkg;
    if (textarea && !textarea.value.trim()) {
      textarea.value = `Halo, saya tertarik dengan ${packageLabels[pkg] || pkg}. Mohon informasi lebih lanjut mengenai harga dan proses pengerjaannya.`;
    }
  });
});

// ===== ACTIVE NAV LINK ON SCROLL =====
const sections = document.querySelectorAll("section[id]");
window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 100;
    if (scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.classList.remove("active-link");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active-link");
    }
  });
});
