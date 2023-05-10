/*
   Programa da mega-sena
   Crie um programa que compare o resultado
   de dois arrays
*/

const entrada = require ('prompt-sync')();

let resMegaSena = [5, 15, 25, 35, 45, 55];
let meuJogo = [1, 2, 3, 4, 5, 6];
let acertos = 0;

for (let 1 = 0; 1 < 6; i++) {
    let numero = entrada('Digite o ' + n + 'º nº do jogo: ');
    meuJogo.push(numero);
}

for (let nMega = 0; nMega < resMegaSena.length; nMega++) {
    for (let nJogo = 0; nJogo < meuJogo.length; nJogo++) {
        if (resMegaSena[nMega] === meuJogo[nJogo]) {
            acertos++;
        }
    }
}

console.log('Você acertou ' + acertos + 'número' + (acertos > 1 ? 's' : '' )) ;