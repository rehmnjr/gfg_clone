// Dark to Light & Light to Dark mode 
let mode = 'dark';
let toggleBtn = document.querySelector('#circle');
let navbarup = document.querySelector('.nav-up');
let navcont1 = document.querySelector('.nav-cont1');
let navdown = document.querySelector('.nav-down');
let moon = document.querySelector('#circle');
let listtxt = document.querySelectorAll('.list');
let searchIcon = document.querySelector('.fa-magnifying-glass');
let heading = document.querySelectorAll('.header');
let searchbarColor = document.querySelector('.inputsearch');
let bg2 = document.querySelector('.bg2');

toggleBtn.addEventListener('click', (evt)=>{
    let body = document.querySelector('body');
    if (mode == 'dark') {
        let tittle= document.querySelector('#circle').title = 'Switch to Dark Mode';
        moon.innerHTML = '<i class="fa-solid fa-moon"></i>';
        body.style.backgroundColor = 'white';
        body.style.color = 'black';
        navcont1.style.color = 'black';
        navbarup.style.backgroundColor = 'white';
        navdown.style.backgroundColor = 'rgb(235, 235, 235)';
        listtxt.forEach(item => {
            item.style.color = 'black';
        });

        searchIcon.style.color = 'black';
        heading.forEach(i => {
            i.style.color = '#0f2b3c';
        });

        bg2.style.backgroundColor = 'white';
        searchbarColor.style.backgroundColor = 'white';
        mode = 'light'; 

    } else {
        let tittle= document.querySelector('#circle').title = 'Switch to Light Mode';
        body.style.backgroundColor = 'black';
        body.style.color = 'white';
        navcont1.style.color = 'white';
        navbarup.style.backgroundColor = '#171b1d';
        moon.innerHTML = '<img src="/Images&Icons/bright.svg" class="bright" id="bright" alt="">';
       
        navdown.style.backgroundColor = '#171b1d';
        listtxt.forEach(item => {
            item.style.color = 'white';
        });

        searchIcon.style.color = 'white';
        heading.forEach(i => {
            i.style.color = 'white';
        });

        bg2.style.backgroundColor = '#171b1d';
        searchbarColor.style.backgroundColor = 'var(--grey)';
        mode = 'dark'; 
    }
});
// <------end------>