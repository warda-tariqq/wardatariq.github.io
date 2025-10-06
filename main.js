// Mobile menu toggle & UX helpers
document.getElementById('menuBtn')?.addEventListener('click', () => {
  const menu = document.getElementById('mobileMenu');
  if (menu) menu.classList.toggle('hidden');
});

// Set year
document.getElementById('year').textContent = new Date().getFullYear();
