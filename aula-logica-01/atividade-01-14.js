//Faça um programa para ler dois números inteiros A e B e informar se A é divisível por B.

var user = require('readLine-sync')
var numeroA = user.question('Numero A: ')
var numeroB = user.question('Numero B: ')
if (numeroA % numeroB == 0) {
    console.log(`O numero ${numeroA} é divisivel por ${numeroB}`)
}else{
    console.log(`O numero ${numeroA} não é divisivel por ${numeroB}`)
}