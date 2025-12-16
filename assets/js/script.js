// UI behaviors that don't depend on portfolio data

(() => {
  const menuBtn = document.getElementById('menuBtn');
  const drawer = document.getElementById('mobileDrawer');
  const closeDrawer = () => {
    if (!drawer) return;
    drawer.classList.remove('open');
    if (menuBtn) menuBtn.setAttribute('aria-expanded', 'false');
  };

  if (menuBtn && drawer) {
    menuBtn.addEventListener('click', () => {
      const isOpen = drawer.classList.toggle('open');
      menuBtn.setAttribute('aria-expanded', String(isOpen));
    });

    drawer.querySelectorAll('a[href^="#"]').forEach(a => {
      a.addEventListener('click', () => closeDrawer());
    });

    // Close when clicking outside
    document.addEventListener('click', (e) => {
      const t = e.target;
      const clickInside = drawer.contains(t) || menuBtn.contains(t);
      if (!clickInside) closeDrawer();
    });
  }

  // A tiny accessibility win: Esc closes the drawer
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeDrawer();
  });
})();
