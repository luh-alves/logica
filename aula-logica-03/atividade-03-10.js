//Faça um algoritmo que receba um número e imprima todos seus divisores.
//EX : usuário informou 21
//O algoritmo imprime : 1 3 7 21

var user = require('readline-sync')
var numero = user.question('Digite um numero:')

for(var i = 1; i <= numero; i++){
    if(numero % i == 0){
        console.log(`Numeros divisores de ${numero} : ${i}`)
        
    }
}



