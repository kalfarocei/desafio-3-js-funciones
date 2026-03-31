const cambiarANegro = (event) => {
    event.target.style.backgroundColor = 'black';
};


const divAzul = document.getElementById("azul");
const divRojo = document.getElementById("rojo");
const divVerde = document.getElementById("verde");
const divAmarillo = document.getElementById("amarillo");


divAzul.addEventListener("click", cambiarANegro);
divRojo.addEventListener("click", cambiarANegro);
divVerde.addEventListener("click", cambiarANegro);
divAmarillo.addEventListener("click", cambiarANegro);

// Segundo ejercicio

let colorGlobal;

document.addEventListener('keydown', function (event) {
    const divKey = document.getElementById("key");

    if (event.key === 'a') {
        colorGlobal = 'pink';
        divKey.style.backgroundColor = colorGlobal;
    } else if (event.key === 's') {
        colorGlobal = 'orange';
        divKey.style.backgroundColor = colorGlobal;
    } else if (event.key === 'd') {
        colorGlobal = 'skyblue';
        divKey.style.backgroundColor = colorGlobal;
    }

    if (event.key === 'q') {
        crearNuevoDiv('purple');
    } else if (event.key === 'w') {
        crearNuevoDiv('gray');
    } else if (event.key === 'e') {
        crearNuevoDiv('brown');
    }
});

function crearNuevoDiv(color) {
    const nuevoElemento = document.createElement('div');
    nuevoElemento.style.width = '200px';
    nuevoElemento.style.height = '200px';
    nuevoElemento.style.backgroundColor = color;
    nuevoElemento.style.border = '2px solid black';
    
  
    document.body.appendChild(nuevoElemento);
}