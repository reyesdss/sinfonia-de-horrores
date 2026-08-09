const elementosReveal = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.15
});

elementosReveal.forEach((el) => observer.observe(el));

const year = document.getElementById('year');
if (year) {
  year.textContent = new Date().getFullYear();
}
