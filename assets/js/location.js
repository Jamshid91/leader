const locIcons = document.querySelectorAll('.locIcon');
const loc = document.querySelector('.location');
const locName = document.querySelector('.location .name');
const locAdd = document.querySelector('.location .address-text');



  if(window.matchMedia('(min-width: 769px)').matches) {
    locIcons.forEach(e => {
        e.addEventListener('mousemove', function() {
            window.onmousemove = function(event) {
                x=event.clientX
                y=event.clientY
    
                loc.style.left = x-30+'px'
                loc.style.top = y-30+'px'
            }
            locName.textContent = e.dataset.name;
                locAdd.textContent = e.dataset.address;
    
                loc.style.opacity = 1
        });
    
        e.addEventListener('mouseout', function() {
            loc.style.opacity = 0
        })
    })
  }

  if(window.matchMedia('(max-width: 768px)').matches) {
    locIcons.forEach(e => {
        e.addEventListener('click', function() {
            locName.textContent = e.dataset.name;
            locAdd.textContent = e.dataset.address;
            loc.classList.add('d-flex')
        });
    })
  }
