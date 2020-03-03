// Escreva uma função que recebe dois parâmetros numéricos e retorne o menor número.
// Solicite dois números para o usuário e forneça como argumento para esta função. 
// Escreva o resultado da função na tela dizendo qual menor número.

function menorNumero(numero1, numero2){
    
    if(numero1 < numero2){
        console.log(`Menor numero: ${numero1}`)

    }else{
        console.log(`Menor numero: ${numero2}`)
    }


}
var user = require('readline-sync')
var x = user.question('Digite um numero:')
var y = user.question('Digite um numero:')
menorNumero(x,y)