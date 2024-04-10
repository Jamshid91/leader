const smallPhotos = document.querySelectorAll('.small-photo img'),
      bigPhoto = document.querySelector('.big-photo img');


smallPhotos.forEach(photo => {
    photo.addEventListener('click', () => {
        smallPhotos.forEach(elem => {
            elem.parentElement.classList.remove('active')
        })
        bigPhoto.src = photo.src
        photo.parentElement.classList.add('active')
    })
})