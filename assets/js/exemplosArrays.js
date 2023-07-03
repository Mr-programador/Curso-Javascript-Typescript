//Array's e suas acões:
//Criar um Array: 
let familia =['Maicon', 'Márcia', 'Simone', 'Marcos'];
console.log(familia);

//Acessar elementos de um array:
console.log(familia[0]); // Saída: Maicon
console.log(familia[1]); // Saída: Márcia
console.log(familia[2]); // Saída: Simone
console.log(familia[3]); // Saída: Marcos

//Adicionar elemento ao final de um array
familia.push('Estevão');
console.log(familia);

////Adicionando outro elemento ao final de um array
familia.push('Lorrayne');
console.log(familia);

//Remover o último elemento de um array:
familia.pop();
console.log(familia);

//Adicionar elementos no início de um array:
familia.unshift('Sebastião');
console.log(familia);

//Remover o primeiro elemento de um array:
familia.shift();
console.log(familia);

//Deletar um elemento do array
let indice = familia.indexOf('Marcos');
if (indice !== -1) {
    familia.splice(indice, 1);
  }
  console.log(familia);

// Substituir um elemento no array
let indiceSubstituir = familia.indexOf('Estevão');
if (indiceSubstituir !== -1) {
  familia[indiceSubstituir] = 'Fabricio';
}
console.log(familia);

//Adicionar elemento
familia.push('Juliane');
console.log(familia);