window.addEventListener("scroll",() => {
    if(window.scrollY < 650){
        document.querySelector(".home h2").style.marginTop = `${window.scrollY}px` 
        document.querySelector(".home .btn").style.marginTop = `${window.scrollY}px`
    } else return
})