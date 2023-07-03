/*
Primitivos (imutaveis) - string, number, boolean, undefined, 
null (bigint, symbol)- Copia

Referencia (mutavel) - array, object, function - Aponta
*/

//Diferença entre copia e referencia:

//Copia:
let num = 10;
console.log(num);
//Aqui o numero foi copiado, ou seja são independentes.
let idade = num;
console.log(idade);

//Referencia:
let numeros = [1,2,3,4,5];
console.log(numeros)
let idades = numeros;
console.log(idades);
//Aqui os numeros foram passados por referencia, dependentes.
//Qualquer mudança feita em numeros/idades vai afetar o array.
numeros.push(6); //Adicionou o numero 6
console.log(idades); //Mostrou a referencia de memoria 
idades.pop(); //Deletou o ultimo numero
console.log(numeros); //Mostrou a referencia de memoria

/*Logo quando a referencia aponta pra um espaço na memoria.
Perde-se a noção de pertencimento, pois numeros/idades
ou qualquer outra variavel que faça referencia a esse array 
poderá ser modificado para todos.*/