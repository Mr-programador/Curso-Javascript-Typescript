//Funções e suas acões:
//Declaração de uma função:
function saudacao() {
    console.log('Olá! Bem-vindo(a)!');
  }

//Chamada de uma função:
saudacao(); // Saída: Olá! Bem-vindo(a)!

//Função com parâmetros:
function somar(a, b) {
    return a + b;
  }
  
  var resultado = somar(3, 5);
  console.log(resultado); // Saída: 8

//Função com valor de retorno:
function calcularArea(raio) {
    return Math.PI * raio * raio;
  }
  
  const area = calcularArea(2);
  console.log(area); // Saída: 12.566370614359172

//Função anônima:
var quadrado = function(x) {
    return x * x;
  };
  
  const result = quadrado(5);
  console.log(result); // Saída: 25

//Arrow function (função de seta):
var cubo = (x) => {
    return x * x * x;
};

const resulta = cubo(3);
console.log(resulta); // Saída: 27

//Função como objeto de primeira classe:
let soma = function(a, b) {
    return a + b;
};

let subtrair = function(a, b) {
  return a - b;
};

let calcular = function(operacao, a, b) {
  return operacao(a, b);
};

console.log(calcular(somar, 3, 2)); // Saída: 5
console.log(calcular(subtrair, 3, 2)); // Saída: 1

//Função recursiva:
function contarDez(numero) {
    if (numero <= 10) {
      console.log(numero);
      contarDez(numero + 1);
    }
  }
  
  contarDez(1); // Saída: 1 2 3 4 5 6 7 8 9 10