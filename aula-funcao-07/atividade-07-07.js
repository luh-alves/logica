// Faça uma função que recebe um número e devolve seu valor absoluto. 
// No final peça um número para o usuário e exiba o valor absoluto.

function numeroAbsoluto(numero) {
    if (numero > 0) {
        return -numero
    } else {
        return -numero
    }
}
var user = require('readline-sync')
var x = user.question('Digite um numero:')
console.log(numeroAbsoluto(x))

