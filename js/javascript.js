// humburger menu resposive
const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('nav ul');

menuToggle.addEventListener('click', function () {
    nav.classList.toggle('slide');
});
// end humburger menu resposive

// scrolling 
document.addEventListener("scroll", function(){
    const nav = document.querySelector("nav");
    
    if(window.scrollY > 0){
        nav.classList.add('scrolled');
    }else{
        nav.classList.remove('scrolled');
    }
});
// end scrolling