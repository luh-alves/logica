//Faça um algoritmo que receba um número e diga se ele é par ou ímpar.

const isOdd = require('is-odd');
var user = require('readline-sync')
var numero = user.question('Digite um numero:')
console.log(`Ímpar = TRUE`)
console.log(`Par = FALSE`)
console.log(isOdd(numero)) //=> true
