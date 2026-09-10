/**
 * Portfolio Main JavaScript
 * Handles: Typewriter effect, navigation, scroll animations, dark mode, gallery, forms
 */

document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initTypewriter();
  initNavigation();
  initSmoothScrolling();
  initScrollAnimations();
  initScrollToTop();
  initNavbarScroll();
  initGallery();
  initContactForm();
  animateProgressBarsOnScroll();
  initStaggerAnimations();
});

// ===================== Dark Mode =====================
function initTheme() {
  const themeToggle = document.querySelector(".theme-toggle");
  if (!themeToggle) return;

  const html = document.documentElement;
  const icon = themeToggle.querySelector("i");

  // Check saved theme or system preference
  const savedTheme = localStorage.getItem("theme");
  const systemPrefersDark = window.matchMedia(
    "(prefers-color-scheme: dark)",
  ).matches;

  if (savedTheme === "dark" || (!savedTheme && systemPrefersDark)) {
    html.setAttribute("data-theme", "dark");
    if (icon) icon.className = "fas fa-sun";
  }

  themeToggle.addEventListener("click", () => {
    const isDark = html.getAttribute("data-theme") === "dark";
    if (isDark) {
      html.removeAttribute("data-theme");
      localStorage.setItem("theme", "light");
      if (icon) icon.className = "fas fa-moon";
    } else {
      html.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
      if (icon) icon.className = "fas fa-sun";
    }
  });
}

// ===================== Typewriter Effect =====================
function initTypewriter() {
  const typewriterElement = document.getElementById("typewriter");
  if (!typewriterElement) return;

  const names = [
    "Ahron Gab Peloni",
    "Web Developer",
    "Tech Enthusiast",
    "Problem Solver",
  ];
  let nameIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 100;

  function type() {
    const currentName = names[nameIndex];

    if (isDeleting) {
      typewriterElement.textContent = currentName.substring(0, charIndex - 1);
      charIndex--;
      typingSpeed = 50;
    } else {
      typewriterElement.textContent = currentName.substring(0, charIndex + 1);
      charIndex++;
      typingSpeed = 100;
    }

    if (!isDeleting && charIndex === currentName.length) {
      isDeleting = true;
      typingSpeed = 2000;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      nameIndex = (nameIndex + 1) % names.length;
      typingSpeed = 500;
    }

    setTimeout(type, typingSpeed);
  }

  type();
}

// ===================== Navigation =====================
function initNavigation() {
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");

  if (!hamburger || !navLinks) return;

  hamburger.addEventListener("click", () => {
    const isActive = hamburger.classList.toggle("active");
    navLinks.classList.toggle("active");
    hamburger.setAttribute("aria-expanded", isActive);
  });

  document.addEventListener("click", (e) => {
    if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
      hamburger.classList.remove("active");
      navLinks.classList.remove("active");
      hamburger.setAttribute("aria-expanded", "false");
    }
  });

  navLinks.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("active");
      navLinks.classList.remove("active");
      hamburger.setAttribute("aria-expanded", "false");
    });
  });
}

// ===================== Navbar Scroll Behavior =====================
function initNavbarScroll() {
  const navbar = document.querySelector(".navbar");
  if (!navbar) return;

  let lastScroll = 0;

  window.addEventListener(
    "scroll",
    () => {
      const currentScroll = window.scrollY;

      // Add scrolled background when not at top
      navbar.classList.toggle("scrolled", currentScroll > 20);

      // Hide navbar on scroll down, show on scroll up
      if (currentScroll > lastScroll && currentScroll > 100) {
        navbar.classList.add("hidden");
      } else {
        navbar.classList.remove("hidden");
      }

      lastScroll = currentScroll;
    },
    { passive: true },
  );
}

// ===================== Scroll-to-Top =====================
function initScrollToTop() {
  const scrollBtn = document.querySelector(".scroll-to-top");
  if (!scrollBtn) return;

  window.addEventListener(
    "scroll",
    () => {
      scrollBtn.classList.toggle("visible", window.scrollY > 500);
    },
    { passive: true },
  );

  scrollBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// ===================== Smooth Scrolling =====================
function initSmoothScrolling() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const href = this.getAttribute("href");
      if (href === "#") return;

      e.preventDefault();
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        const navHeight = document.querySelector(".navbar")?.offsetHeight || 80;
        const targetPosition = targetElement.offsetTop - navHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });

        history.pushState(null, null, `#${targetId}`);
      }
    });
  });
}

// ===================== Scroll Animations =====================
function initScrollAnimations() {
  const fadeElements = document.querySelectorAll(".fade-in");

  const observerOptions = {
    root: null,
    rootMargin: "-80px 0px -100px 0px",
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, observerOptions);

  fadeElements.forEach((el) => observer.observe(el));
}

// ===================== Stagger Animations =====================
function initStaggerAnimations() {
  const staggerItems = document.querySelectorAll(".stagger-item");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
  );

  staggerItems.forEach((item) => observer.observe(item));
}

// ===================== Gallery Lightbox =====================
function initGallery() {
  const galleryItems = document.querySelectorAll(".gallery-item");
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const lightboxCaption = document.getElementById("lightbox-caption");
  const closeBtn = document.querySelector(".close-lightbox");

  if (!lightbox || galleryItems.length === 0) return;

  galleryItems.forEach((item) => {
    item.addEventListener("click", () => {
      const img = item.querySelector("img");
      const caption = item.querySelector(".caption")?.textContent || "";

      lightboxImg.src = img.src;
      lightboxImg.alt = img.alt;
      lightboxCaption.textContent = caption;
      lightbox.classList.add("active");
      document.body.style.overflow = "hidden";
      closeBtn?.focus();
    });
  });

  function closeLightbox() {
    lightbox.classList.remove("active");
    document.body.style.overflow = "";
  }

  closeBtn?.addEventListener("click", closeLightbox);

  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) closeLightbox();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && lightbox.classList.contains("active")) {
      closeLightbox();
    }
  });
}

// ===================== Contact Form =====================
function initContactForm() {
  const form = document.getElementById("contact-form");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    const submitBtn = form.querySelector(".btn-submit");
    const originalText = submitBtn?.innerHTML;

    if (submitBtn) {
      submitBtn.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
      submitBtn.disabled = true;
      submitBtn.style.backgroundColor = "#10b981";
    }

    console.log("Form submitted:", data);

    setTimeout(() => {
      form.reset();
      if (submitBtn) {
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
        submitBtn.style.backgroundColor = "";
      }
    }, 3000);
  });
}

// ===================== Progress Bar Animation =====================
function animateProgressBarsOnScroll() {
  const progressBars = document.querySelectorAll(".progress");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const progress = entry.target;
          const targetWidth =
            progress.style.getPropertyValue("--progress") ||
            progress.style.width;
          progress.style.width = "0%";

          setTimeout(() => {
            progress.style.width = targetWidth;
          }, 300);

          observer.unobserve(progress);
        }
      });
    },
    { threshold: 0.5 },
  );

  progressBars.forEach((bar) => observer.observe(bar));
}
