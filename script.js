document.addEventListener('DOMContentLoaded', () => {

  // ==========================
  // FORMULÁRIO
  // ==========================
  const form = document.getElementById('contact-form');
  const msgDiv = document.getElementById('form-message');

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    msgDiv.textContent = '';
    msgDiv.style.color = '';

    if (!name || !email || !message) {
      msgDiv.textContent = 'Por favor, preencha todos os campos.';
      msgDiv.style.color = 'crimson';
      return;
    }

    if (!emailRegex.test(email)) {
      msgDiv.textContent = 'Informe um e-mail válido.';
      msgDiv.style.color = 'crimson';
      return;
    }

    msgDiv.textContent = 'Enviando...';
    msgDiv.style.color = 'black';

    const submitBtn = form.querySelector('button[type="submit"]');
    submitBtn.disabled = true;
    submitBtn.textContent = 'Enviando...';

    setTimeout(() => {
      form.reset();
      msgDiv.textContent = 'Mensagem enviada com sucesso!';
      msgDiv.style.color = 'green';
      submitBtn.disabled = false;
      submitBtn.textContent = 'Enviar';
    }, 800);
  });


  // ==========================
  // MENU RESPONSIVO
  // ==========================
  const menuToggle = document.getElementById('menu-toggle');
  const siteNav = document.getElementById('site-nav');

  if (menuToggle && siteNav) {
    menuToggle.addEventListener('click', () => {
      const isOpen = siteNav.classList.toggle('open');
      menuToggle.setAttribute('aria-expanded', isOpen);
    });

    siteNav.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        siteNav.classList.remove('open');
        menuToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }


  // ==========================
  // TEMA CLARO / ESCURO
  // ==========================
  const themeToggle = document.getElementById('theme-toggle');
  const themeIcon = document.getElementById('theme-icon');
  const root = document.documentElement;

  const savedTheme = localStorage.getItem('site-theme');
  if (savedTheme === 'dark') {
    root.classList.add('dark');
    themeIcon.textContent = '🌙';
    themeToggle.setAttribute('aria-pressed', 'true');
  }

  themeToggle.addEventListener('click', () => {
    const isDark = root.classList.toggle('dark');

    themeIcon.textContent = isDark ? '🌙' : '🌞';
    themeToggle.setAttribute('aria-pressed', isDark);

    localStorage.setItem('site-theme', isDark ? 'dark' : 'light');
  });


  // ==========================
  // FECHAR MENU EM DESKTOP
  // ==========================
  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
      siteNav.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
    }
  });

});
