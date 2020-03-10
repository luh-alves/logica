//Faça uma programa que receba 4 notas e calcule a média e apresente ao usuário a média no final.
var user = require('readline-sync')
var media = require('median')
var nota1 = user.questionInt('nota:')
var nota2 = user.questionInt('nota:')
var nota3 = user.questionInt('nota:')
var nota4 = user.questionInt('nota:')
var notas = [nota1,nota2,nota3,nota4]
var total = media(notas)
console.log(`Media: ${total}`)