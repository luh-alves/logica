//Faça um algoritmo que receba um número e diga se ele é primo ou não.

const isPrime = require('prime-number')
var user = require('readline-sync') 
var numero = user.question('Digite um numero:')
console.log(isPrime(numero)) //19- true