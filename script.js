const toggle = document.getElementById('langToggle');
toggle.addEventListener('click', () => {
    const english = document.body.classList.toggle('en');
    document.documentElement.lang = english ? 'en' : 'ja';
    toggle.textContent = english ? '??? / EN' : 'EN / ???';
});
document.getElementById('year').textContent = new Date().getFullYear();