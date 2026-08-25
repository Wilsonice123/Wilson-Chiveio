const pageLoader = document.querySelector('.page-loader');

window.addEventListener('load', () => {
  if (pageLoader) {
    setTimeout(() => {
      pageLoader.classList.add('is-hidden');
    }, 2000);
  }
});

const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.site-nav');
const navLinks = document.querySelectorAll('.site-nav a');

if (menuToggle && nav) {
  menuToggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('is-open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });

  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('is-open');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

const revealItems = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

revealItems.forEach((item) => revealObserver.observe(item));

const yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

const cvDownload = document.querySelector('.cv-button-secondary[download]');
if (cvDownload) {
  cvDownload.addEventListener('click', (event) => {
    event.preventDefault();

    const downloadLink = document.createElement('a');
    downloadLink.href = cvDownload.href;
    downloadLink.download = cvDownload.download;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    downloadLink.remove();
  });
}