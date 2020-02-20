//Faça um algoritmo que receba um texto de entrada e diga se a primeira letra é maiúscula ou não

var user = require('readLine-sync')
var texto = user.question('Digite seu texto:')

if(texto[0].toUpperCase() === texto[0]){
    console.log('Primeira Letra maiúscula')
}else{
    console.log('Primeira Letra minuscula ')
}