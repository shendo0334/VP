/**
 * Vattaparambil Gold & Diamonds (VP Jewellery)
 * Smooth Scroll Reveals & Parallax Micro-Interactions
 * FULLY RESPECTS PREFERRED REDUCED MOTION RULE
 */

document.addEventListener('DOMContentLoaded', () => {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const revealElements = document.querySelectorAll('.reveal-on-scroll');

  // If user prefers reduced motion, reveal everything immediately and exit
  if (prefersReducedMotion) {
    revealElements.forEach(el => el.classList.add('is-revealed'));
    return;
  }

  // IntersectionObserver for staggered reveals
  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -60px 0px',
    threshold: 0.15
  };

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-revealed');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  revealElements.forEach(el => revealObserver.observe(el));

  // Subtle hero parallax on mouse move (desktop only)
  const heroWrapper = document.querySelector('.hero-media-wrapper');
  const heroBadge = document.querySelector('.hero-floating-badge');
  const heroSection = document.querySelector('.hero-section');

  if (heroSection && heroWrapper && window.innerWidth > 1024) {
    heroSection.addEventListener('mousemove', (e) => {
      const rect = heroSection.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;

      heroWrapper.style.transform = `perspective(1000px) rotateY(${x * 6}deg) rotateX(${-y * 6}deg) translateY(-4px)`;
      if (heroBadge) {
        heroBadge.style.transform = `translate3d(${x * 16}px, ${y * 16}px, 0)`;
      }
    });

    heroSection.addEventListener('mouseleave', () => {
      heroWrapper.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg) translateY(0)';
      if (heroBadge) {
        heroBadge.style.transform = 'translate3d(0, 0, 0)';
      }
    });
  }
});
