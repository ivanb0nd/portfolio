'use strict';

//WOW
new WOW().init();

window.addEventListener('scroll', function() {
  iconMenu.classList.remove('_active');
  menuBody.classList.remove('_active');
});
//menu burger

const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
if (iconMenu){
  iconMenu.addEventListener('click', function() {
    iconMenu.classList.toggle('_active');
    menuBody.classList.toggle('_active');
  });
}


// scroll

const menuLinks = document.querySelectorAll('.menu__link[data-goto]');

if (menuLinks.length > 0) {
  menuLinks.forEach(menuLinks => {
    menuLinks.addEventListener('click', onMenuLinkClick);
  });

  // let onMenuLinkClick = function(e) {
  function onMenuLinkClick(e) {
    const menuLink = e.target;
    
    if(menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)){
      const gotoBlock = document.querySelector(menuLink.dataset.goto);
      const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset;
      
      if(iconMenu.classList.contains('_active')) {
        iconMenu.classList.remove('_active');
        menuBody.classList.remove('_active');
      }

      window.scrollTo({
        top: gotoBlockValue,
        behavior: 'smooth'
      });
      e.preventDefault();
      
    }
  }
  
}


//preloader

let preloader = document.querySelector('.preloader');

window.addEventListener('load', () => {
  preloader.classList.add('_hide');
  setTimeout(() => {
    preloader.remove();
    if (document.body.classList.contains('_lock')) {
      document.body.removeAttribute('class');
    }
  }, 800);
});