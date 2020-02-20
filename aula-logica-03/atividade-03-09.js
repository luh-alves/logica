//Faça um algoritmo que receba uma palavra e imprima ela ao contrário.
//EX: usuário informou BANANA
//Algoritmo imprime: ANANAB

var user = require('readline-sync')
var palavra = user.question('Digite uma palavra:')
for(var i = palavra.length - 1; i >= 0; i--){
    console.log(palavra[i])

}

