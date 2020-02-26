// Escreva um programa javascript para escrever o seguinte padrão na tela, com N linhas:
// Onde N é um número determinado pelo usuário (no exemplo, N=5).
// *  
// * *  
// * * *  
// * * * *  
// * * * * *
var user = require('readline-sync')
var numero = user.question('Digite um numero:')
for (var i = 0; i <= numero; i++) {
    let estrelas = ''
    for (let index = 0; index < i; index++) {
        estrelas += '*'

    }
    console.log(estrelas)
}

