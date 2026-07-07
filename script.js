// =========================
// NAVBAR SCROLL EFFECT
// =========================

const header = document.getElementById("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// =========================
// MODERN MOBILE SIDEBAR
// =========================

document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.querySelector(".menu-btn");
  const navLinks = document.querySelector(".nav-links");
  const overlay = document.querySelector(".menu-overlay");

  if (menuBtn && navLinks && overlay) {
    menuBtn.addEventListener("click", () => {
      navLinks.classList.toggle("show");
      overlay.classList.toggle("show");
    });

    overlay.addEventListener("click", () => {
      navLinks.classList.remove("show");
      overlay.classList.remove("show");
    });

    document.querySelectorAll(".nav-links a").forEach(link => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("show");
        overlay.classList.remove("show");
      });
    });
  }
});

// =========================
// BACK TO TOP BUTTON
// =========================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
});

topBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

// =========================
// WHATSAPP JOIN FORM
// =========================

const joinForm = document.getElementById("joinForm");

if (joinForm) {
  joinForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const inputs = this.querySelectorAll("input, textarea");

    const name = inputs[0].value;
    const age = inputs[1].value;
    const parent = inputs[2].value;
    const phone = inputs[3].value;
    const address = inputs[4].value;
    const experience = inputs[5].value;
    const message = inputs[6].value;

    const text =
`🥋 New Admission Request

Name: ${name}
Age: ${age}
Parent Name: ${parent}
Phone: ${phone}
Address: ${address}
Previous Experience: ${experience}
Message: ${message}`;

    const whatsapp =
      `https://wa.me/917561099244?text=${encodeURIComponent(text)}`;

    window.open(whatsapp, "_blank");

    this.reset();
  });
}

// =========================
// GALLERY LIGHTBOX
// =========================

const galleryImages = document.querySelectorAll(".gallery-grid img");

const lightbox = document.createElement("div");
lightbox.id = "lightbox";
document.body.appendChild(lightbox);

galleryImages.forEach(img => {
  img.addEventListener("click", () => {
    lightbox.classList.add("active");

    const image = document.createElement("img");
    image.src = img.src;

    while (lightbox.firstChild) {
      lightbox.removeChild(lightbox.firstChild);
    }

    lightbox.appendChild(image);
  });
});

lightbox.addEventListener("click", () => {
  lightbox.classList.remove("active");
});

// =========================
// SCROLL ANIMATION
// =========================

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show-animation");
    }
  });
}, {
  threshold: 0.2
});

const hiddenElements =
  document.querySelectorAll(
    ".about, .master, .classes, .gallery, .contact, .join, .counter-box"
  );

hiddenElements.forEach(el => {
  el.classList.add("hidden-animation");
  observer.observe(el);
});
