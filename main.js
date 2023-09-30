let contador = document.getElementById('contador');
let cuenta = localStorage.getItem('cuenta') ? Number(localStorage.getItem('cuenta')) : 0;
let cuentaAnterior = localStorage.getItem('cuentaAnterior') ? Number(localStorage.getItem('cuentaAnterior')) : 0;
contador.textContent = cuenta;

document.body.addEventListener('click', function() {
    cuenta++;
    localStorage.setItem('cuenta', cuenta);
    contador.textContent = cuenta;
});

document.getElementById('restar').addEventListener('click', function(event) {
    event.stopPropagation();
    if (cuenta > 0) {
        cuenta--;
        localStorage.setItem('cuenta', cuenta);
        contador.textContent = cuenta;
    }
});

document.getElementById('reset').addEventListener('click', function(event) {
    event.stopPropagation();
    localStorage.setItem('cuentaAnterior', cuenta);
    cuenta = 0;
    localStorage.setItem('cuenta', cuenta);
    contador.textContent = cuenta;
});

document.getElementById('anterior').addEventListener('click', function(event) {
    event.stopPropagation();
    if (localStorage.getItem('cuentaAnterior')) {
        cuenta = Number(localStorage.getItem('cuentaAnterior'));
        localStorage.setItem('cuenta', cuenta);
        contador.textContent = cuenta;
    }
});

document.getElementById('tema').addEventListener('click', function(event) {
    event.stopPropagation();
    
    if (localStorage.getItem('tema') === 'oscuro') {
        document.body.classList.remove('tema-oscuro');
        localStorage.setItem('tema', 'claro');
        document.getElementById('tema').src = 'oscuro.png';
        
    } else {
        document.body.classList.add('tema-oscuro');
        localStorage.setItem('tema', 'oscuro');
        document.getElementById('tema').src = 'luz.png';
        
   }
});

if (localStorage.getItem('tema') === 'oscuro') {
   document.body.classList.add('tema-oscuro');
   document.getElementById('tema').src = 'oscuro.png';
}
