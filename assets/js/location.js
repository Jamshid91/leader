const locIcons = document.querySelectorAll('.locIcon');
const loc = document.querySelector('.location');
const locName = document.querySelector('.location .name');
const locAdd = document.querySelector('.location .address-text');


locIcons.forEach(e => {
    e.addEventListener('mousemove', function() {
        window.onmousemove = function(event) {
            x=event.clientX
            y=event.clientY

            loc.style.left = x-50+'px'
            loc.style.top = y+70+'px'
        }
        locName.textContent = e.dataset.name;
            locAdd.textContent = e.dataset.address;

            loc.style.opacity = 1
    });

    e.addEventListener('mouseout', function() {
        loc.style.opacity = 0
    })
})
