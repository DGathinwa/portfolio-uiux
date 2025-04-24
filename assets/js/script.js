document.addEventListener("DOMContentLoaded", () => {
  // Toggle navigation on small screens
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show');
  });

  // Smooth scroll behavior
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
        navLinks.classList.remove('show');
      }
    });
  });

// Form validation
form.addEventListener('submit', function (e) {
  e.preventDefault();
  const name = form.querySelector('input[type="text"]').value.trim();
  const email = form.querySelector('input[type="email"]').value.trim();
  const phone = form.querySelector('input[type="tel"]').value.trim();
  const subject = form.querySelector('input[type="text"]:nth-of-type(2)').value.trim();
  const message = form.querySelector('textarea').value.trim();

  if (!name || !email || !message) {
    alert("Please fill in all required fields.");
    return;
  }

  alert("Form submitted successfully!");
  form.reset();
});

const sections = document.querySelectorAll('.section');

const isInView = (section) => {
  const rect = section.getBoundingClientRect();
  return rect.top < window.innerHeight && rect.bottom >= 0;
};

const checkSections = () => {
  sections.forEach((section) => {
    if (isInView(section)) {
      section.classList.add('visible');
    }
  });
};

window.addEventListener('scroll', checkSections);
checkSections();  // Check on page load
