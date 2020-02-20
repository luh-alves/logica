//Faça um programa que calcule a potência (potenciação) de um número. 
//Para isso ele deve receber dois números de entrada: o primeiro número é a base da potência, o segundo número será a potência.
//EX: usuário inseriu 2 para base e 4 para potência.
//O programa imprime : 16 Lembrando: 24 = 2*2*2*2

var user = require('readline-sync')
var primeiroNumero = user.question('Digite um numero para base:')
var segundoNumero = user.question('Digite um numero para potência:')

var total = Math.pow(primeiroNumero,segundoNumero)
console.log(`A potência de ${primeiroNumero} é: ${total}`)


