let moon = document.getElementById('moon');
let text = document.getElementById('text');
let cityRigth = document.getElementById('city-right');
let cityLeft = document.getElementById('city-left');
let button = document.getElementById('button');

window.addEventListener("scroll", () => {
    let value = window.scrollY;

    moon.style.top = value * .8 + 'px';
    text.style.marginTop = value * 1.5 + 'px';
    button.style.marginTop = value * 1.5 + 'px';
    cityLeft.style.left = value * -1.5 + 'px';
    cityRigth.style.left = value * 1.5 + 'px';
});