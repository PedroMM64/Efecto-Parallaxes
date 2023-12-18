let dubaiText = document.getElementById('dubaiText');
let burjkhalifa = document.getElementById('burjkhalifa');
let stars = document.getElementById('stars');
let button = document.getElementById('button');

window.addEventListener('scroll', function() {
    let value = this.window.scrollY;

    dubaiText.style.left = value * -2 + 'px';
    burjkhalifa.style.left = value * 1 + 'px';
    stars.style.top = value * -2 + 'px';
    button.style.marginRight = value * 3 +'px';
});