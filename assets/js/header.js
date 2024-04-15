const menuBtn = document.querySelector('.menu-btn'),
      menu = document.querySelector('.menu'),
      contactUs = document.querySelectorAll('.connect-with-us'),
      popUp_contactUs = document.querySelector('.popUp-contactUs'),
      body = document.querySelector('body');

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('showMenu');
    menuBtn.classList.toggle('clickedMenu')
    body.classList.toggle('bodyStopScroll')
});

contactUs.forEach(btn => {
    btn.addEventListener('click', () => {
        popUp_contactUs.classList.remove('d-none')
    })
})