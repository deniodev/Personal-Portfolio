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

const projects = document.getElementById('cards');

const firstProjects = [{
  grid: 1,
  id: 2,
  title: 'Professional art <br> printing Data More',
  text: 'A daily selection of privately personalized reads; no accounts of sign-ups required. has been the  industry standard',
  skills: {
    skill1: 'html',
    skill2: 'Boostrap',
    skill3: 'Ruby',
  },
},
{
  grid: 1,
  id: 3,
  title: 'Data Dashboard <br> Healthcare',
  text: 'A daily selection of privately personalized reads; no accounts of sign-ups required. has been the  industry standard',
  skills: {
    skill1: 'html',
    skill2: 'Boostrap',
    skill3: 'Ruby',
  },
},
{
  grid: 1,
  id: 4,
  title: 'Website <br> Portfolio',
  text: 'A daily selection of privately personalized reads; no accounts of sign-ups required. has been the  industry standard',
  skills: {
    skill1: 'html',
    skill2: 'Boostrap',
    skill3: 'Ruby',
  },
}];

const secondProjects = [{
  grid: 1,
  id: 5,
  title: 'Professional art <br> printing Data More',
  text: 'A daily selection of privately personalized reads; no accounts of sign-ups required. has been the  industry standard',
  skills: {
    skill1: 'html',
    skill2: 'Boostrap',
    skill3: 'Ruby',
  },
},
{
  grid: 1,
  id: 6,
  title: 'Data Dashboard <br> Healthcare',
  text: 'A daily selection of privately personalized reads; no accounts of sign-ups required. has been the  industry standard',
  skills: {
    skill1: 'html',
    skill2: 'Boostrap',
    skill3: 'Ruby',
  },
},
{
  grid: 1,
  id: 7,
  title: 'Website <br> Portfolio',
  text: 'A daily selection of privately personalized reads; no accounts of sign-ups required. has been the  industry standard',
  skills: {
    skill1: 'html',
    skill2: 'Boostrap',
    skill3: 'Ruby',
  },
}];

const renderFirstProjects = (firstProjects, containerName) => {
  firstProjects.forEach((item) => {
    const card = document.createElement('div');
    card.classList = `card${item.grid}`;
    card.innerHTML = `<div class="card${item.grid}-header">
    <h3>${item.title}</h3>
  </div>
  <div class="card1-text">
    <p>${item.text}</p>
  </div>
  <ul class="cards-btn">
    <li><button class="project-btn">${item.skills.skill1}</button></li>
    <li><button class="project-btn">${item.skills.skill2}</button></li>
    <li><button class="project-btn">${item.skills.skill3}</button></li>
  </ul>
  <button class="project-see-btn" data-modal-target='#popup${item.id}'>See project</button>
</div>`;
    containerName.appendChild(card);
  });
};

const renderSecondProjects = (firstProjects, containerName) => {
  firstProjects.forEach((item) => {
    const card = document.createElement('div');
    card.classList = `card${item.grid}`;
    card.innerHTML = `<div class="card${item.grid}-header">
    <h3>${item.title}</h3>
  </div>
  <div class="card1-text">
    <p>${item.text}</p>
  </div>
  <ul class="cards-btn">
    <li><button class="project-btn">${item.skills.skill1}</button></li>
    <li><button class="project-btn">${item.skills.skill2}</button></li>
    <li><button class="project-btn">${item.skills.skill3}</button></li>
  </ul>
  <button class="project-see-btn" data-modal-target='#popup${item.id}'>See project</button>
</div>`;
    containerName.appendChild(card);
  });
};

renderFirstProjects(firstProjects, projects);
renderSecondProjects(secondProjects, projects);

const modalCards = [
  {
    id: 1,
    title: 'Multi Post Stories',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type    and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    features: {
      tech1: 'HTML',
      tech2: 'Boostrap',
      tech3: 'Ruby on rails',
    },
  },
  {
    id: 2,
    title: 'Keeping track of hundreds  of components website',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
    features: {
      tech1: 'HTML',
      tech2: 'Boostrap',
      tech3: 'Ruby on rails',
    },
  },
  {
    id: 3,
    title: 'Keeping track of hundreds  of components website',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
    features: {
      tech1: 'HTML',
      tech2: 'Boostrap',
      tech3: 'Ruby on rails',
    },
  },
  {
    id: 4,
    title: 'Keeping track of hundreds  of components website',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
    features: {
      tech1: 'HTML',
      tech2: 'Boostrap',
      tech3: 'Ruby on rails',
    },
  },
  {
    id: 5,
    title: 'Keeping track of hundreds  of components website',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
    features: {
      tech1: 'HTML',
      tech2: 'Boostrap',
      tech3: 'Ruby on rails',
    },
  },
  {
    id: 6,
    title: 'Keeping track of hundreds  of components website',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
    features: {
      tech1: 'HTML',
      tech2: 'Boostrap',
      tech3: 'Ruby on rails',
    },
  },
  {
    id: 7,
    title: 'Keeping track of hundreds  of components website',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
    features: {
      tech1: 'HTML',
      tech2: 'Boostrap',
      tech3: 'Ruby on rails',
    },
  },
];

const popupContainer = document.getElementById('popup-container');

const renderPopup = (modalCards, popupContainer) => {
  modalCards.forEach((e) => {
    const modalCard = document.createElement('div');
    modalCard.classList = 'popup';
    modalCard.id = `popup${e.id}`;
    modalCard.innerHTML = `<div class="popup-wrap-content">
                            <div class="popup-header">
                              <h2 class="popup-title">${e.title}</h2><button class="popup-close-btn"
                              data-close-button>&times;</button>
                            </div>
                            <div>
                              <ul class="popup-btn-container">
                              <li><button class="feature-btn popup-feature" type="button">${e.features.tech1}</button></li>
                              <li><button class="feature-btn boostrap popup-feature" type="button">${e.features.tech2}</button></li>
                              <li><button class="feature-btn feature-ruby-popup popup-feature" type="button">${e.features.tech3}</button></li>
                              </ul>
                            </div>
                            <div class="popup-content">
                              <img src="./images/popup.png">
                              <p class="popup-text">${e.text}</p>
                            </div>
                            <div class="popup-project-btn-container">
                              <a href="#"><button class="project-btn-popup">See Live <img src="./images/popup2.png"
                              alt="See Live"></button></a>
                              <a href="#"><button class="project-btn-popup">See Source <img src="./images/popup1.png"
                              alt="Github"></button></a>
                            </div>
                            </div>`;

    popupContainer.appendChild(modalCard);
  });
};

renderPopup(modalCards, popupContainer);

const closePopupButtons = document.querySelectorAll('[data-close-button]');
const openPopupButtons = document.querySelectorAll('[data-modal-target]');
const overlay = document.getElementById('overlay');

const openPopup = (modal) => {
  if (modal == null) return;
  modal.classList.add('active');
  overlay.classList.add('active');
};

const closePopup = (modal) => {
  if (modal == null) return;
  modal.classList.remove('active');
  overlay.classList.remove('active');
};

openPopupButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const popup = document.querySelector(button.dataset.modalTarget);
    openPopup(popup);
  });
});

closePopupButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const popup = button.closest('.popup');
    closePopup(popup);
  });
});

overlay.addEventListener('click', () => {
  const popups = document.querySelectorAll('.popup.active');
  popups.forEach((modal) => {
    closePopup(modal);
  });
});