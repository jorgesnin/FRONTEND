console.log("Hola Mundo!");

const botonLike = document.querySelector('#btn-like');
console.log(botonLike);

//botonLike.innerHTML = "Boton desde Javascript";

botonLike.addEventListener('click', () => {
    console.log("este es un console log dentro del evento click")
    botonLike.innerText= "me gusta";

})
