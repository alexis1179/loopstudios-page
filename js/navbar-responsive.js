var header = document.getElementsByClassName("header");
var navbar = document.getElementById("navbar");
var button = document.getElementById("nav-toogler");
var num = 0;
button.addEventListener('click', function(){
    if(num == 0){
        navbar.classList.add("active");
        num = 1;
    }
    else{
        navbar.classList.remove("active");
        num = 0;
    }
})
