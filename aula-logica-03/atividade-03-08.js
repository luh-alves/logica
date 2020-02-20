//Faça um algoritmo que receba uma palavra e imprima cada caractere da palavra em uma linha.
//EX: usuário informou MAÇÃ
//O algoritmo imprime: 
//M
//A
//Ç
//Ã

var user = require('readline-sync')
var palavra = user.question('Digite uma palavra:')
for(var i = 0; i < palavra.length; i++){
    console.log(palavra[i])

}



