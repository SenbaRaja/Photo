function openLightbox(img) {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  lightboxImg.src = img.src;
  lightbox.style.display = "flex";
}

function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}
// Fade-in on scroll
function handleScrollFade() {
  const elements = document.querySelectorAll('.fade-in');
  const triggerBottom = window.innerHeight * 0.85;

  elements.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < triggerBottom) {
      el.classList.add('visible');
    } else {
      el.classList.remove('visible');
    }
  });
}

window.addEventListener('scroll', handleScrollFade);
window.addEventListener('load', handleScrollFade);
// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href'))
      .scrollIntoView({ behavior: 'smooth' });
  });
});
function toggleMenu() {
  const menu = document.getElementById('dropdownMenu');
  menu.classList.toggle('show');
}
