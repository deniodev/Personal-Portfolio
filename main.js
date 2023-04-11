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

const popup = document.createElement('div');
  popup.className = 'popup-class';
  popup.innerHTML = `<div>
  <div class="popup-header">
    <h2 class="popup-title">Keeping track of hundreds  of components website</h2><button class="popup-close-btn"
      data-close-button>&times;</button>
  </div>
  <div>
    <ul class="popup-btn-container">
      <li><button class="feature-btn popup-feature" type="button">HTML</button></li>
      <li><button class="feature-btn boostrap popup-feature" type="button">Bootstrap</button></li>
      <li><button class="feature-btn feature-ruby-popup popup-feature" type="button">Ruby on rails</button></li>
    </ul>
  </div>
  <div class="popup-content">
    <img src="./images/popup.png">
    <p class="popup-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took
     a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, 
     but also the leap into electronic typesetting, remaining essent</p>
  </div>
  <div class="popup-project-btn-container">
    <a><button class="project-btn-popup">See Live <img src="./images/popup1.png"
          alt="Icon See Live"></button></a>
    <a><button class="project-btn-popup">See Source <img src="./images/popup2.png"
          alt="Github Icon"></button></a>
  </div>
</div>`

main.appendChild(popup);
container.appendChild(main);

const close = document.querySelector('.popup-close-btn');
close.addEventListener('click', ()=>{
  container.removeChild(main);
})


