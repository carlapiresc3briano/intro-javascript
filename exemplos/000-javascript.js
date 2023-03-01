// o comando abaixo apresenta uma mensagem na tela 
console.log('olá estou programando em javascript');

/*
    comentário que ocupa mais 
    de uma linha 
*/
// criação de variável do tipo texto 
let nome = 'Carla Pires';
// criação de variável do tipo numérico (inteiro)
let idade = 17;
// criação de variável do tipo númerico (decimal)
let altura = 1.75;
// criação de variável do tipo verdadeiro/falso
let trabalha = true; // true = verdadeiro | false = falso
// exemplo de variávelde nome composto
let corFavorita = 'Laranja';
// exemplo de variável do tipo lista de valores
let cores_favoritas = ['laranja', 'Roxo', 'Azul'];
// exemplo de variável que armazena um objeto
let endereco ={
    'logradouro'        : 'Rua',
    'nome_logradouro'   : 'Brasil',
    'número'            : '50 A',
    'bairro'            : 'Centro',
    'cidade'            : 'Tupã'
}; 
let covid;
let dengue = null;

console.log('Nome:  '  + nome);
console.log('Idade: '  + idade);
console.log('Altura: ' + altura );
console.log('Trabalha: ' + trabalha );
console.log('CorFavorita: ' + corFavorita);
console.log('Cores_Favoritas: ' + cores_favoritas[0]  + ', ' + cores_favoritas[1] + ', ' + cores_favoritas[2]);
console.log('Endereço: ' + endereco.logradouro + ' ' + endereco.nome_logradouro + ', '+ endereco.número + ' - ' + endereco.bairro + ' - ' + endereco.cidade);
console.log('Covid: ' + covid);
console.log('Dengue:' + dengue); 

