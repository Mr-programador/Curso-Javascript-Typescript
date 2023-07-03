//Primeira Função, Chamando nomes.
/*Toda função é declarada da mesma forma 
function nome-da-função (parametro){
    <Aqui entra a ação da função>
  }
Para chamar a função, escrevemos o nome da função e passamos o parametro.
nome-da-função (parametro)   

Exemplo:*/
//A função bomDia esta solicitando um parametro nome generico.
function bomDia(nome){
    console.log (`Bom dia ${nome}`)
    //ao colocar um return, o comando é execurado e apos isso me retorna o solicitado.
    return 123456
}

//Ao chamar a função bomDia passamos o parametro o qual será atribuido a nome.
bomDia('Maicon')
bomDia('Márcia')
bomDia( 'Simone')

/*será exibido:
Bom dia Maicon
Bom dia Márcia
Bom dia Simone
*/

//Como salvar o resultado em uma variavel?
const variavel = bomDia('Maicon')
//o return salva na minha variavel o resultado da função.
console.log (variavel) 
//console.log exibe que foi salvo em bomDia.
// no caso 123456


//Arrumando tudo...
function bomDia(nome){
    return (`Bom dia ${nome}`)
}

bomDia('Maicon')

const a = bomDia('Maicon')
console.log (a)

//Outro Exemplo:
function soma(n1 = 1, n2 = 1){
    let resultado = n1 + n2
    return resultado
}

console.log(soma(4,10))

//Concatenando com função
function nomeCompleto(firstName, secoundName){
    let nome =   firstName + secoundName  
    return nome
}

let nome = nomeCompleto ('Maicon', ' Rodrigues')
console.log(nome)

//Outras formas de criar uma função:

//colocando a função direto em uma variavel
const raiz = function (n){
    return n ** 0.5;
};

console.log(raiz(25));

//Função em seta ou Arrow-Function
//retira a expressão function e apos o parametro faz um arrow =>
const raizq = (n) => {
    return n ** 0.5;
};

console.log(raizq(16));

//Para facilitar a vida do programador, quando a funão tem apenas 
//uma linha na funão é possivel simplificar ela dessa forma:
const raizQuadrada = n => n ** 0.5;

console.log(raizQuadrada(81));

//Dica: É melhor fazer muitas funções pequenas que 2 ou 3 grandes.
