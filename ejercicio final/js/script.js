/* Animation Scroll */

window.addEventListener("scroll", function(){
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
})


/* Animation burguer */ 

const icon_Menu = document.getElementById("iconMenu");
const main_Nav = document.getElementById("navMain");

icon_Menu.addEventListener('click', ()=>{
    main_Nav.classList.toggle('showNav');

    icon_Menu.classList.toggle('toogle');
})

/* Animation slider Big Index */ 

var slidesBig = document.querySelectorAll('.slide')
var btnSliderBig = document.querySelectorAll('.btnNav__Slide')
let cSlide = 1;

//Manual Slider

var manualNav = function(manual){

    slidesBig.forEach((slide) =>{
        slide.classList.remove('activo');
    
        btnSliderBig.forEach((btn) =>{
            btn.classList.remove('activo');
        })
    })

    slidesBig[manual].classList.add('activo');
    btnSliderBig[manual].classList.add('activo');
}

btnSliderBig.forEach((btns, i) =>{
    btns.addEventListener("click", () =>{
        manualNav(i);
        cSlide = 1;
    })
})

//Autoplay Slider

/*var repeat = function(activeClass){
    let active = document.getElementsByClassName('activo');
    let i = 1;

    var repeater = () => {
        setTimeout(function(){
            [...active].forEach((activeSlide) => {
            activeSlide.classList.remove('activo');
            });

            slidesBig[i].classList.add('activo');
            btnSliderBig[i].classList.add('activo');
            i++;

            if(slidesBig.length == i){
                i = 0;
            }
            if(i >= slidesBig.length){
                return;
            }
            repeater();
        }, 10000);
    }
    repeater();
}
repeat();*/
