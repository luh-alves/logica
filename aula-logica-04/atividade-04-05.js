//Crie um programa que peça o usuário n números e, quando o usuário digitar -1, 
//imprima o maior e o menor, sem levar em consideração o -1. 

var user = require('readline-sync')
var numero = Number(user.question('Digite um numero:'))
var numeroMaior = Number.MIN_SAFE_INTEGER
var numeroMenor = Number.MAX_SAFE_INTEGER

while (numero >= 0) {
    if (numero > numeroMaior) {
        numeroMaior = numero
    }
    if (numero < numeroMenor) {
        numeroMenor = numero;
    }
    numero = Number(user.question('Digite um numero:'))
}
console.log(`O maior numero digitado foi: ${numeroMaior}`)
console.log(`O menor numero digitado foi: ${numeroMenor}`)
