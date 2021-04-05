

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

/* Initialize Swiper */

var swiper = new Swiper('.swiper-container', {
    spaceBetween: 30,
    centeredSlides: true,
    /*autoplay: {
      delay: 5500,
      disableOnInteraction: false,
    },*/
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
/*var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});*/