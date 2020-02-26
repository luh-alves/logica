// Fazer um programa que calcule e imprima o fatorial de um número fornecido pelo usuário,
// usando o comando For.. Perguntar ao usuário se ele deseja calcular o fatorial de
// outro número e repetir a execução do programa tantas vezes quantas o usuário indicar.

var user = require('readline-sync')
var numero = user.question('digite um numero:')
var fatorial
for (fatorial = 1; numero > 1; numero = numero - 1){
    fatorial = fatorial * numero;
}
console.log(`Fatorial é: ${fatorial}` )