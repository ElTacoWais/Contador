var contador = 0;
var modoOscuro = false;

window.onload = function() {
    // Intenta cargar el contador y el modo oscuro desde localStorage cuando la página se carga
    var contadorGuardado = localStorage.getItem('contador');
    var modoOscuroGuardado = localStorage.getItem('modoOscuro');
    if (contadorGuardado) {
        contador = parseInt(contadorGuardado);
        document.getElementById('contador').innerText = contador;
    }
    if (modoOscuroGuardado) {
        modoOscuro = JSON.parse(modoOscuroGuardado);
        actualizarModo();
    }
}

function incrementarContador() {
    contador++;
    actualizarContador();
}

function decrementarContador() {
    if (contador > 0) {
        contador--;
        actualizarContador();
    }
}

function resetearContador() {
    contador = 0;
    actualizarContador();
}

function cambiarModo(event) {
    modoOscuro = !modoOscuro;
    actualizarModo();
    event.stopPropagation();
}

function actualizarContador() {
    document.getElementById('contador').innerText = contador;
    // Guarda el contador en localStorage cada vez que se actualiza
    localStorage.setItem('contador', contador);
}

function actualizarModo() {
    document.body.style.backgroundColor = modoOscuro ? '#000' : '#ddd';
    document.body.style.color = modoOscuro ? '#ddd' : '#000';
    document.getElementById('botonModo').src = modoOscuro ? 'luz.png' : 'oscuro.png';
    // Guarda el modo oscuro en localStorage cada vez que se actualiza
    localStorage.setItem('modoOscuro', modoOscuro);
}
