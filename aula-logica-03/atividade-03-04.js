//Faça um programa que recebe um número e imprima todos os números pares de 0 até o número inserido.
//Ex: usuário inseriu 8
//O programa imprime
//0
//2
//4
//6
//8

var user = require('readline-sync')
var numero = user.question('Digite um numero:')
var cont = 0

while(cont < numero){
    if(cont % 2 == 0){
        console.log(`Numero: ${cont}`)
    }
    cont++
}
