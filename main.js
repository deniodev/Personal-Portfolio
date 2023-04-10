const menuBtn = document.querySelector('.hamburger');
const navBar = document.querySelector('.sidebar');
const getNavLogg = document.querySelector('.logo');

menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('active');
  navBar.classList.toggle('active');
  getNavLogg.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach((n) => n.addEventListener('click', () => {
  menuBtn.classList.remove('active');
  navBar.classList.remove('active');
  getNavLogg.classList.remove('active');
}));