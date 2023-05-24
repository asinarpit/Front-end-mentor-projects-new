const mainIMG = document.querySelector(".main-img");
// const menu = document.querySelector(".nav-menu");
const menuIcon = document.querySelector(".menu-icon");
const menuIconClose = document.querySelector(".menu-icon-close");
const navMenu = document.querySelector(".nav-menu");
const navBarMobile = document.querySelector(".nav-bar-mobile");
const wrapper = document.querySelector(".wrapper");

function ChangeIMG(x) {
  if (x.matches) {
    // If media query matches
    mainIMG.src = "./assets/images/image-web-3-mobile.jpg";
    mainIMG.style.height = "100%";
    mainIMG.style.width = "100%";
    mainIMG.style.objectFit = "contain";
   
  } 
  else {
    mainIMG.src = "./assets/images/image-web-3-desktop.jpg";
  }
}

function HandleMenu(x) {
  if (x.matches) {
    navMenu.classList.remove("active");
    menuIcon.classList.add("active");

    menuIcon.addEventListener("click",()=>{
      menuIcon.classList.remove("active");
      navBarMobile.classList.add("active");
  });

  menuIconClose.addEventListener("click",()=>{
    navBarMobile.classList.remove("active");
    menuIcon.classList.add("active");
  })
  
  } 
  else {
   navMenu.classList.add("active");
    menuIcon.classList.remove("active");
    navBarMobile.classList.remove("active");
  }
}


var x = window.matchMedia("(max-width: 375px)");
HandleMenu(x);
ChangeIMG(x); // Call listener function at rn time


x.addEventListener("change", ()=>{
    ChangeIMG(x);
    HandleMenu(x);
}); 



