// Escreva um programa javascript para escrever o seguinte padrão na tela, com N linhas:
// Onde N é um número determinado pelo usuário (no exemplo, N=5).
// *  
// * *  
// * * *  
// * * * *  
// * * * * *
var user = require('readline-sync')
var numero = user.question('Digite um numero:')
var estrelas = ''
var j = 1;
while (j <= numero) {
    estrelas += '*'
    console.log(estrelas)
    j++

}



