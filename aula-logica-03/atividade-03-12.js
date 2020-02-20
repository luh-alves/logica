//Fazer um algoritmo que recebe 15 números de entrada e calcule a média dos números fornecidos.

var user = require('readline-sync')
var total = 0
var numero
var cont = 0

while (cont <= 2) {    
    numero = user.question('Digite um numero:')
    total = Number(total) + Number(numero)
    cont++
}

var media = total / cont
console.log(`Media: ${media}`)

