const locIcons = document.querySelectorAll('.locIcon');
const loc = document.querySelector('.location');
const locName = document.querySelector('.location .name');
const locAdd = document.querySelector('.location .address-text');
const locnameLast = document.querySelector('.location .namelast');
const locAddLast = document.querySelector('.location .addlast');


locIcons.forEach(e => {
    e.addEventListener('mousemove', function() {
        if(e.id == 'city1') {
            loc.style.top = '35%'
            loc.style.left = '45%'
        } 
        else if(e.id == 'city2') {
            loc.style.top = '13%'
            loc.style.left = '48%'
        }
        else if(e.id == 'city3') {
            loc.style.top = '45%'
            loc.style.left = '50%'
        }
        else if(e.id == 'city4') {
            loc.style.top = '47%'
            loc.style.left = '58%'
        }
        else if(e.id == 'city5') {
            loc.style.top = '63%'
            loc.style.left = '68%'
        }
        else if(e.id == 'city6') {
            loc.style.top = '74%'
            loc.style.left = '55%'
        }
        else if(e.id == 'city7') {
            loc.style.top = '63%'
            loc.style.left = '52%'
        }
        else if(e.id == 'city8') {
            loc.style.top = '61%'
            loc.style.left = '46%'
        }
        else if(e.id == 'city9') {
            loc.style.top = '61%'
            loc.style.left = '40%'
        }
        else if(e.id == 'city10') {
            loc.style.top = '75%'
            loc.style.left = '38%'
        }
        else if(e.id == 'city11') {
            loc.style.top = '71%'
            loc.style.left = '30%'
        }
        else if(e.id == 'city12') {
            loc.style.top = '60%'
            loc.style.left = '32%'
        }
        else if(e.id == 'city13') {
            loc.style.top = '62%'
            loc.style.left = '27%'
        }


        locName.textContent = e.dataset.name;
        locAdd.textContent = e.dataset.address;
        locnameLast.textContent = e.dataset.namelast;
        locAddLast.textContent = e.dataset.addlast;

        loc.style.opacity = 1
    });

    e.addEventListener('mouseout', function() {
        loc.style.opacity = 0
    })
})
