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

const projects = document.getElementById('cards')

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
