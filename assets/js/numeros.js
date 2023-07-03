const numero = Number(prompt('Digite um número:'));
/* let numero = prompt('Digite um número:');
numero = Number(numero); Outra forma de fazer usando let*/
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');

numeroTitulo.innerHTML = numero;

texto.innerHTML = '';
texto.innerHTML += `<p>Raiz quadrada ${numero ** 0.5}. </p>`;
texto.innerHTML += `<p>O numero ${numero} é inteiro ${Number.isInteger(numero)}.</p>`;
texto.innerHTML += `<p>É NaN: ${Number.isNaN(numero)}.</p>`;
texto.innerHTML += `<p>Arredondando pra Baixo: ${Math.floor(numero)}.</p>`;
texto.innerHTML += `<p>Arredondando pra Cima: ${Math.ceil(numero)}.</p>`;
texto.innerHTML += `<p>Com duas casas Decimais: ${numero.toFixed(2)}.</p>`;