//Faça um programa que recebe um número de entrada e repita a mensagem “BIP BIP” de acordo com o número inserido.
//EX: usuário inseriu 3
//O programa imprime:BIP BIP BIP BIP BIP BIP

var user = require('readline-sync')
var numero = user.question('Digite um numero:')
var cont = 0

while(numero != cont){
    console.log(`BIP BIP`)
    cont++
}





