/*
   Programa da mega-sena
   Crie um programa que compare o resultado
   de dois arrays
*/

const entrada = require ('prompt-sync')();

let resMegaSena = [5, 15, 25, 35, 45, 55];
let meuJogo = [1, 2, 3, 4, 5, 6];
let acertos = 0;

for (let i = 0; i <6; 1++) {
    const numero = Math.floor(Math.random() * 60) + 1;
    resMegaSena.push(numero);
}

for (let i = 0; 1 < 6; i++) {
    let numero = entrada('Digite o ' + i + 'º nº do jogo: ');
    meuJogo.push(numero);
}

for (let nMega = 0; nMega < resMegaSena.length; nMega++) {
    for (let nJogo = 0; nJogo < meuJogo.length; nJogo++) {
        if (resMegaSena[nMega] == meuJogo[nJogo]) {
            acertos++;
        }
    }
}

let mensagem = 'Resultado do sorteio: ';

for (let n = 0; n < resMegaSena.length; n++) {
    mensagem = mensagem + resMegaSena[n] + 
    (resMegaSena.length == n + 1 ? '' : ' - ');

}

mensagem = 'Seu jogo: ';

for (let n = 0; < meuJogo.length; n++) {
    mensagem = mensagem + meujogo[n] +
    (meuJogo.length == n + 1 ? '' : ' - ');
}

console.log('Você acertou ' + acertos + 'número' + (acertos > 1 ? 's' : '' )) ;