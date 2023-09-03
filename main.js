let headerSwiper = new Swiper(".header-container", {
    slidesPerView: 1,
    spaceBetween: 500,
    loop: true,
    autoplay: {
        delay: 4000, 
        disableOnInteraction: false, 
    },
});

window.addEventListener("scroll",()=>{
    document.querySelector("nav").classList.toggle("navbar-style", window.scrollY> 100)
})

const menu  = document.querySelector(".navbar");
const menuBtn = document.querySelector("#open-navbar");
const closeBtn = document.querySelector("#close-navbar")
const navLinks = document.querySelectorAll(".navbar a");
menuBtn.addEventListener("click",()=>{
    menu.style.display = "flex";
    closeBtn.style.display = "inline-block";
    menuBtn.style.display = "none";
})

const closeNav = ()=>{
    menu.style.display = "none";
    closeBtn.style.display = "none";
    menuBtn.style.display = "inline-block";
};

closeBtn.addEventListener("click",closeNav)

navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      closeNav(); 
    });
  });