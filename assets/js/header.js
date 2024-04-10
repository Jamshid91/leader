const menuBtn = document.querySelector('.menu-btn'),
      menu = document.querySelector('.menu'),
      body = document.querySelector('body');

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('showMenu');
    menuBtn.classList.toggle('clickedMenu')
    body.classList.toggle('bodyStopScroll')
});