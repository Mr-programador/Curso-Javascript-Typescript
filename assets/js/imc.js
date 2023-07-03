//Capturar evento de submit do formulario
const form = document.querySelector('.form');

form.addEventListener('submit', function (e){
    e.preventDefault();
    console.log('Evento previnido.');
});