//Escreva um programa que pergunta um número ao usuário, e mostra sua tabuada completa (de 1 até 10).
//EX.: 5 - 5x1 = 5, 5x2 = 10, 5x3=15, 5x4=20, 5x5=25, 5x6 = 30, 5x7 = 35, 5x8 = 40, 5x9 = 45, 5x10 = 50

var user = require('readline-sync')
var numero = user.question('Digite um numero:')
var cont = 1

while(cont <= 10){
    console.log(`${numero} X ${cont} = ${numero*cont}`)
    cont++
}

