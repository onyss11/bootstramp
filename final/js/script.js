/* Animation Scroll */

window.addEventListener("scroll", function(){
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
})


/* Animation burguer */ 

const iconMenu = document.getElementById('iconMenu');
const main_Nav = document.getElementById("navMain");

iconMenu.onclick = function(){
    iconMenu.classList.toggle('active');
    main_Nav.classList.toggle('active');
}