/**
 * Gallery Lightbox Module
 * Handles image gallery lightbox with keyboard and touch/swipe navigation
 */

document.addEventListener("DOMContentLoaded", () => {
  const galleryItems = document.querySelectorAll(".gallery-item");
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const lightboxCaption = document.getElementById("lightbox-caption");
  const closeBtn = document.querySelector(".close-lightbox");

  if (!lightbox || galleryItems.length === 0) return;

  let currentImageIndex = 0;
  let touchStartX = 0;
  let touchEndX = 0;

  const images = Array.from(galleryItems).map((item) => ({
    src: item.querySelector("img")?.src || "",
    alt: item.querySelector("img")?.alt || "",
    caption: item.querySelector(".caption")?.textContent || "",
  }));

  // Open lightbox
  galleryItems.forEach((item, index) => {
    item.addEventListener("click", () => {
      currentImageIndex = index;
      openLightbox(images[index]);
    });
  });

  function openLightbox(imageData) {
    lightboxImg.src = imageData.src;
    lightboxImg.alt = imageData.alt;
    lightboxCaption.textContent = imageData.caption;
    lightbox.classList.add("active");
    document.body.style.overflow = "hidden";
    closeBtn?.focus();
  }

  function closeLightbox() {
    lightbox.classList.remove("active");
    document.body.style.overflow = "";
  }

  function navigateImage(direction) {
    currentImageIndex =
      (currentImageIndex + direction + images.length) % images.length;
    openLightbox(images[currentImageIndex]);
  }

  // Close button
  closeBtn?.addEventListener("click", closeLightbox);

  // Click outside to close
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) closeLightbox();
  });

  // Keyboard navigation
  document.addEventListener("keydown", (e) => {
    if (!lightbox.classList.contains("active")) return;

    switch (e.key) {
      case "Escape":
        closeLightbox();
        break;
      case "ArrowLeft":
        e.preventDefault();
        navigateImage(-1);
        break;
      case "ArrowRight":
        e.preventDefault();
        navigateImage(1);
        break;
    }
  });

  // Touch / Swipe navigation
  lightbox.addEventListener(
    "touchstart",
    (e) => {
      touchStartX = e.changedTouches[0].screenX;
    },
    { passive: true },
  );

  lightbox.addEventListener(
    "touchend",
    (e) => {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
    },
    { passive: true },
  );

  function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartX - touchEndX;

    if (Math.abs(diff) > swipeThreshold) {
      if (diff > 0) {
        // Swipe left -> next image
        navigateImage(1);
      } else {
        // Swipe right -> previous image
        navigateImage(-1);
      }
    }
  }

  // Prevent scrolling when lightbox is open
  lightbox.addEventListener(
    "touchmove",
    (e) => {
      e.preventDefault();
    },
    { passive: false },
  );
});
