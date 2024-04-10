const zoomBtn = document.querySelectorAll('button.zoom'),
      zoomPhoto = document.querySelector('.zoom-photo');

zoomBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        zoomPhoto.src = btn.previousElementSibling.src;
        zoomPhoto.parentElement.classList.remove('d-none')
    })
})