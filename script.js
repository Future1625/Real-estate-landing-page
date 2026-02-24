const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
const inquiryPopup = document.getElementById('inquiryPopup');
const popupCloseBtn = document.querySelector('.popup-close');
const popupLinks = document.querySelectorAll('.open-popup, .close-popup-link');

navToggle?.addEventListener('click', () => {
  const expanded = navToggle.getAttribute('aria-expanded') === 'true';
  navToggle.setAttribute('aria-expanded', String(!expanded));
  navLinks.classList.toggle('open');
});

navLinks?.addEventListener('click', (event) => {
  if (event.target.tagName === 'A') {
    navLinks.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  }
});

popupLinks.forEach((button) => {
  button.addEventListener('click', () => {
    if (button.classList.contains('open-popup')) {
      inquiryPopup.classList.add('show');
      inquiryPopup.setAttribute('aria-hidden', 'false');
    } else {
      inquiryPopup.classList.remove('show');
      inquiryPopup.setAttribute('aria-hidden', 'true');
    }
  });
});

popupCloseBtn?.addEventListener('click', () => {
  inquiryPopup.classList.remove('show');
  inquiryPopup.setAttribute('aria-hidden', 'true');
});

inquiryPopup?.addEventListener('click', (event) => {
  if (event.target === inquiryPopup) {
    inquiryPopup.classList.remove('show');
    inquiryPopup.setAttribute('aria-hidden', 'true');
  }
});

const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

reveals.forEach((item) => observer.observe(item));

document.getElementById('year').textContent = new Date().getFullYear();
