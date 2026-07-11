const header = document.querySelector('.site-header');
const menuToggle = document.querySelector('#menuToggle');
const mobileMenu = document.querySelector('#mobileMenu');
const langToggle = document.querySelector('#langToggle');
let language = 'en';

function updateHeader() { header.classList.toggle('scrolled', window.scrollY > 30); }

function updateLanguage() {
  document.querySelectorAll('[data-en][data-zh]').forEach((node) => {
    node.textContent = language === 'en' ? node.dataset.en : node.dataset.zh;
  });
  document.documentElement.lang = language === 'en' ? 'en' : 'zh-CN';
  langToggle.textContent = language === 'en' ? '中 / EN' : 'EN / 中';
  menuToggle.textContent = mobileMenu.hidden ? (language === 'en' ? 'Menu' : '菜单') : (language === 'en' ? 'Close' : '关闭');
}

menuToggle.addEventListener('click', () => {
  const open = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', String(!open));
  mobileMenu.hidden = open;
  updateLanguage();
});

mobileMenu.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  mobileMenu.hidden = true;
  menuToggle.setAttribute('aria-expanded', 'false');
  updateLanguage();
}));

langToggle.addEventListener('click', () => { language = language === 'en' ? 'zh' : 'en'; updateLanguage(); });
const observer = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) entry.target.classList.add('visible'); }), { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach((node) => observer.observe(node));
window.addEventListener('scroll', updateHeader, { passive: true });
updateHeader();
