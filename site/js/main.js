console.log("hello")
function parallax(){
    margin = window.scrollY * 0.8 + "px 0 0 0"
    
    document.querySelector(".bg").style.margin = margin
}

function menu(event){
    let menu= document.querySelector(".menu")
    menu.classList.toggle("activatemenu")
}

function matches(event){
    let matches= document.querySelector(".matchprofile")
    matches.classList.toggle("nextmatch")
}

function liked(event){
    let like= document.querySelector("#hearticon")
    like.classList.toggle("liked")
}