console.log("hello")
function parallax(){
    margin = window.scrollY * 0.8 + "px 0 0 0"
    
    document.querySelector(".bg").style.margin = margin
}

function menu(event){
    let menu= document.querySelector(".menu")
    menu.classList.toggle("activatemenu")
}