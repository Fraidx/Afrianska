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
let section = document.querySelector(".section-whatWeDo");
btn.addEventListener("click", () => {
  section.scrollIntoView({
    block: "start",
    behavior: "smooth"
  });
});
