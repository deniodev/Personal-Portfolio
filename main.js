const menuBtn = document.getElementById('union');
const navBar = document.querySelector('.sidebar');

menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('active');
  navBar.classList.toggle('active');
});

document.querySelectorAll('.nave-link').forEach((n) => n.addEventListener('click', () => {
    menuBtn.classList.remove('active');
    navBar.classList.remove('active');
}));