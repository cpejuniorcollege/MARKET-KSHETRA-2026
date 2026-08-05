const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if(entry.isIntersecting){

            entry.target.classList.add("active");

        }

    });

},{
    threshold:0.15
});

reveals.forEach((item)=>{

    observer.observe(item);

});
// Scroll reveal animation

const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {

    reveals.forEach((element) => {

        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const revealPoint = 120;

        if(elementTop < windowHeight - revealPoint){
            element.classList.add("active");
        }

    });

});
// Navbar scroll effect

const navbar = document.querySelector(".navbar");


window.addEventListener("scroll",()=>{

    if(window.scrollY > 50){

        navbar.style.background =
        "rgba(0,0,0,0.55)";

    }

    else{

        navbar.style.background =
        "rgba(255,255,255,0.05)";

    }

});
