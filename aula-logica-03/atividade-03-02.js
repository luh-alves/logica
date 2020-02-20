//Criar um algoritmo que realize a multiplicação de dois números maiores que zero SEM usar o operador de multiplicação (*)

var user = require('readline-sync')
var numeroA = user.question('Digite um numero:')
var numeroB = user.question('Digite um numero:')
var numeroC = 0

while(numeroB > 0){
   
   numeroC = Number(numeroC)+Number(numeroA);
   numeroB--;
   
}
console.log("O numero e " + numeroC);

