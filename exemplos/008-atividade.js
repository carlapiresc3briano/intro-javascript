/* 
Criar um programa que receba 1 nota de 0 a 10 e 
retorne aprovado caso a nota seja maior ou igual a 7  
*/

const entrada = require('prompt-sync')();

let nota = parseFloat(entrada ('Digite a sua nota: '));

if (nota < 0 || nota > 10) {
    console.log('A nota deve estar entre 0 e 10!');
} else { 
if (nota >= 7) {
    console.log('Aprovado ');
} else {

 console.log('Reprovado');

 }
} 
