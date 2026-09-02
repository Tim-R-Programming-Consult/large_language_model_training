// ============================================================
// Tim-R Programming Consult — Landing page interactions
// ============================================================

document.addEventListener('DOMContentLoaded', () => {

  // ---------- Mobile nav ----------
  const burgerBtn = document.getElementById('burgerBtn');
  const navMobile = document.getElementById('navMobile');

  if (burgerBtn && navMobile) {
    burgerBtn.addEventListener('click', () => {
      const isOpen = navMobile.classList.toggle('is-open');
      burgerBtn.classList.toggle('is-open', isOpen);
      burgerBtn.setAttribute('aria-expanded', String(isOpen));
    });

    // Close mobile menu after tapping a link
    navMobile.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        navMobile.classList.remove('is-open');
        burgerBtn.classList.remove('is-open');
        burgerBtn.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // ---------- Curriculum tabs ----------
  const dayButtons = document.querySelectorAll('.day-btn');
  const dayPanels = document.querySelectorAll('.day-panel');

  dayButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const day = btn.getAttribute('data-day');

      dayButtons.forEach((b) => b.classList.remove('is-active'));
      dayPanels.forEach((p) => p.classList.remove('is-active'));

      btn.classList.add('is-active');
      const panel = document.querySelector(`.day-panel[data-panel="${day}"]`);
      if (panel) panel.classList.add('is-active');
    });
  });

  // ---------- Scroll reveal ----------
  const revealEls = document.querySelectorAll('.reveal');

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    revealEls.forEach((el) => observer.observe(el));
  } else {
    // Fallback: just show everything
    revealEls.forEach((el) => el.classList.add('is-visible'));
  }

});