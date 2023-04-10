const menuBtn = document.getElementById('union');
const navBar = document.querySelector('.sidebar');
const getNavLogg = document.getElementById('mylogo');

menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('active');
  navBar.classList.toggle('active');
  getNavLogg.classList.toggle('active');
});

document.querySelectorAll('.nave-link').forEach((n) => n.addEventListener('click', () => {
  menuBtn.classList.remove('active');
  navBar.classList.remove('active');
  getNavLogg.classList.remove('active');
}));