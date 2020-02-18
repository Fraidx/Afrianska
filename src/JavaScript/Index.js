window.onload = () => {
  scrollTo(0, 0);
};

function modal() {
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
}
modal();
