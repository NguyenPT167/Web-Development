// Lightweight interactions: theme toggle, year injection, simple form UX
(function(){
  const root = document.documentElement;
  const themeToggle = document.getElementById('theme-toggle');
  const yearEl = document.getElementById('year');
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  const saved = localStorage.getItem('theme');

  const setTheme = (theme) => {
    if(theme === 'light'){
      root.setAttribute('data-theme','light');
      themeToggle.setAttribute('aria-pressed','false');
    } else {
      root.removeAttribute('data-theme');
      themeToggle.setAttribute('aria-pressed','true');
    }
  };

  // Initialize
  setTheme(saved || (prefersDark ? 'dark' : 'light'));

  themeToggle.addEventListener('click', () => {
    const isLight = root.getAttribute('data-theme') === 'light';
    const next = isLight ? 'dark' : 'light';
    setTheme(next);
    localStorage.setItem('theme', next);
  });

  // Year
  if(yearEl) yearEl.textContent = new Date().getFullYear();

  // Smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', (e) => {
      const href = a.getAttribute('href');
      if(href.length > 1){
        e.preventDefault();
        const el = document.querySelector(href);
        if(el) el.scrollIntoView({behavior:'smooth', block:'start'});
      }
    });
  });

  // Simple form handler to provide UX (mailto fallback)
  const form = document.getElementById('contact-form');
  if(form){
    form.addEventListener('submit', (e) => {
      // Let the mailto action proceed — but provide graceful validation
      const email = document.getElementById('email');
      const name = document.getElementById('name');
      const message = document.getElementById('message');

      if(!email.value || !name.value || !message.value){
        e.preventDefault();
        alert('Please complete all fields before sending.');
        return false;
      }

      // Optionally show a small success message (browser will open mail client)
      setTimeout(()=>alert('Your mail client should open — or copy-paste your message to send.'), 250);
    });
  }
})();