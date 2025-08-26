
document.addEventListener('DOMContentLoaded', () => {
  const mainContent = document.getElementById('main-content');
  const loginContainer = document.getElementById('login-container');
  const loginForm = document.getElementById('login-form');
  const loginMessage = document.getElementById('login-message');
  const logoutBtn = document.getElementById('logout-btn');

 
  const aboutSection = document.getElementById('about');
  const projectsSection = document.getElementById('projects');
  const contactSection = document.getElementById('contact');


  const navLinks = document.querySelectorAll('nav a');

  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // For simplicity, accept any username/password
    loginContainer.style.display = 'none';
    mainContent.style.display = 'block';
    // Show About by default
    showSection(aboutSection);
    setActiveLink('#about');
  });


  logoutBtn.addEventListener('click', () => {
    mainContent.style.display = 'none';
    loginContainer.style.display = 'block';
  
    navLinks.forEach(link => link.classList.remove('active'));
  });

  function showSection(section) {
    aboutSection.style.display = 'none';
    projectsSection.style.display = 'none';
    contactSection.style.display = 'none';

    section.style.display = 'block';
  }

  function setActiveLink(href) {
    navLinks.forEach(link => {
      if (link.getAttribute('href') === href) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }

  document.querySelector('nav').addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
      e.preventDefault();
      const target = e.target.getAttribute('href');

      if (target === '#about') {
        showSection(aboutSection);
        setActiveLink('#about');
      } else if (target === '#projects') {
        showSection(projectsSection);
        setActiveLink('#projects');
      } else if (target === '#contact') {
        showSection(contactSection);
        setActiveLink('#contact');
      }
    }
  });

  showSection(aboutSection);
  setActiveLink('#about');
});