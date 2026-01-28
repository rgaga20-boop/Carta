// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Handle service buttons
document.querySelectorAll('.btn-servicio').forEach(button => {
  button.addEventListener('click', function (e) {
    e.preventDefault();
    const href = this.getAttribute('data-href');
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Add interactive feedback to service cards
const servicios = document.querySelectorAll('.servicio');
servicios.forEach(servicio => {
  servicio.style.cursor = 'pointer';
});

// Mobile menu toggle (if needed in future)
console.log('GGRepairShop - Script cargado correctamente');

// Add animation to elements when they appear
window.addEventListener('scroll', () => {
  const servicios = document.querySelectorAll('.servicio');
  servicios.forEach(servicio => {
    const rect = servicio.getBoundingClientRect();
    const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
    if (isVisible) {
      servicio.style.opacity = '1';
      servicio.style.transform = 'translateY(0)';
    }
  });
});

// Set initial styles for service cards
servicios.forEach(servicio => {
  servicio.style.opacity = '0.8';
  servicio.style.transition = 'all 0.3s ease';
});
