//Objetos e suas ações
//Criando um Objeto
let pessoa = {nome: "Maicon",
                anoNasc: 1995,
                cabelo: "preto",
                olhos: "castranhos",
                estadoCivil: "solteiro"
            }

//Acessar propriedades de um objeto:
console.log(pessoa.nome); // Saída: João
console.log(pessoa['idade']); // Saída: 25

//Adicionar propriedades a um objeto:
pessoa.email = 'joao@example.com';
pessoa['telefone'] = '123456789';

//Atualizar propriedades de um objeto:
pessoa.idade = 30;
pessoa['profissao'] = 'Engenheiro';

//Remover propriedades de um objeto:
delete pessoa.profissao;

//Verificar se uma propriedade existe em um objeto:
console.log('nome' in pessoa); // Saída: true
console.log('endereco' in pessoa); // Saída: false

//Iterar sobre as propriedades de um objeto:
for (let chave in pessoa) {
    console.log(chave + ': ' + pessoa[chave]);
  }

//Copiar um objeto para outro:
const pessoa2 = Object.assign({}, pessoa);

//Obter as chaves de um objeto:
const chaves = Object.keys(pessoa);
console.log(chaves); // Saída: ['nome', 'idade', 'email', 'telefone']

//Obter os valores de um objeto:
const valores = Object.values(pessoa);
console.log(valores); // Saída: ['João', 30, 'joao@example.com', '123456789']
