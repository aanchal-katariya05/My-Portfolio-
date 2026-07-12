
// Theme toggle (dark mode <-> light mode)
const body = document.body;
const icon = document.getElementById('icon');
 
function applyTheme(isLight) {
    body.classList.toggle('light-mode', isLight);
    // flip the sun icon so it reads well on both backgrounds
    icon.style.filter = isLight ? 'invert(1)' : 'none';
}
 
function change() {
    const isLight = !body.classList.contains('light-mode');
    applyTheme(isLight);
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
}
 
// restore saved theme on load
document.addEventListener('DOMContentLoaded', () => {
    const saved = localStorage.getItem('theme');
    if (saved === 'light') applyTheme(true);
});