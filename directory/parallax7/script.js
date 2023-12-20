let moon = document.getElementById('moon');
let text = document.getElementById('text');
let button = document.getElementById('button');
let train = document.getElementById('train');

let desert_moon = document.getElementById('desert-moon');
let man = document.getElementById('man');

window.addEventListener("scroll", ()=> {
    let value = window.scrollY;
    
    moon.style.marginTop = value * .9 + 'px';
    text.style.marginTop = value * -.9 + 'px';
    button.style.marginTop = value * -0.2 + '%';
    train.style.marginLeft = value * 2.5 + 'px';

    desert_moon.style.top = value * .3 + 'px';
    man.style.left = value * .6 + 'px';
})

let calcScrollValue = () => {
    let scrollProgress = document.getElementById('progress');
    let pos =  document.documentElement.scrollTop;

    let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrollValue = Math.round((pos * 100) / calcHeight);

    if(pos > 100){
        scrollProgress.style.display = "grid";
    }
    else{
        scrollProgress.style.display = "none";
    }

    scrollProgress.addEventListener("click", () => {
        document.documentElement.scrollTop = 0;
    });

    scrollProgress.style.background = `conic-gradient(#194eb9 ${scrollValue}%, #67ccff ${scrollValue}%)`;
};

window.onscroll = calcScrollValue;
window.onload = calcScrollValue;