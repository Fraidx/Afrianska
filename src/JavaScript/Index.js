function modal(){

    let modal = document.querySelector('.modal');
    let closebtn = document.querySelector('.close');
    let openbtn = document.querySelector('#menu');


    
    closebtn.addEventListener('click', () => {
        modal.classList.toggle('opened')
        openbtn.style.display = "block"
        document.body.style.overflowY = "scroll";
    })

    openbtn.addEventListener('click', () => {
        modal.classList.toggle('opened')
        openbtn.style.display = "none"
        document.body.style.overflowY = "hidden";
    })


}

modal();