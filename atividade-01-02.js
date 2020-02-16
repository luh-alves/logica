//Faça um programa que receba um número via teclado e verifique se este número é par ou ímpar.

var user = require('readLine-sync')
var numero = user.question('Digite um numero:')
if(numero % 2 == 0 ){
    console.log(`O numero : ${numero} é PAR`)
}else{
    console.log(`O numero : ${numero} é ÍMPAR`)
}