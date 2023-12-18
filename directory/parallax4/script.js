let dubaiText = document.getElementById('dubaitext');
let burjkhalifa = document.getElementById('burjkhalifa');
let stars = document.getElementById('stars');
let button = document.getElementById('button');

window.addEventListener('scroll', ()=> {
    let value = window.scrollY;

    dubaiText.style.left = value * -2 + 'px';
    burjkhalifa.style.top = value * 1 + 'px';
    stars.style.top = value * -2 + 'px';
    button.style.marginTop = value * 2 +'px';
});