//Faça um programa que receba três notas, calcule e mostre a média aritmética entre elas, caso a média aritmética seja:
//Media maior ou igual a 7 imprimir : ALUNO APROVADO 
//Media menor que 7 imprimir : ALUNO REPROVADO


var user = require('readLine-sync')
var nota1 = user.question('Nota: ')
var nota2 = user.question('Nota: ')
var nota3 = user.question('Nota: ')
var soma = Number(nota1) + Number(nota2) + Number(nota3)
var media = soma/3
if(media >= 7){
    console.log('****** ALUNO APROVADO ******')
}else{
    console.log('****** ALUNO REPROVADO ******')
}
console.log(`Media: ${media}`)