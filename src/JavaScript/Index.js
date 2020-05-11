// Preloader
window.addEventListener("load", () => {
  let preloader = document.querySelector(".preloader");
  preloader.classList.add("hidde");
  setTimeout(() => {
    preloader.style.display = "none";
    preloader.remove();
  }, 600);
});

// Modal window
(() => {
  let modal = document.querySelector(".modal");
  let closebtn = document.querySelector(".modal__close");
  let openbtn = document.querySelector(".menu");

  closebtn.addEventListener("click", () => {
    modal.classList.toggle("opened");
    openbtn.style.display = "block";
    document.body.style.overflowY = "auto";
  });

  openbtn.addEventListener("click", () => {
    modal.classList.toggle("opened");
    openbtn.style.display = "none";
    document.body.style.overflowY = "hidden";
  });
})();

// Scrolled for WhatWeDo section
let btn = document.querySelector(".section-hero__btn");
let section = document.querySelector(".section-ourProjects__header");
btn.addEventListener("click", () => {
  section.scrollIntoView({
    block: "start",
    behavior: "smooth"
  });
});

// Animation for sections with AOS
AOS.init({
  disable: false,
  startEvent: "DOMContentLoaded",
  initClassName: "aos-init",
  animatedClassName: "aos-animate",
  useClassNames: false,
  disableMutationObserver: false,
  debounceDelay: 50,
  throttleDelay: 99
});
