//Faça um algoritmo que receba peso e altura do usuário e calcule o IMC.

var FasamImc = require('fasam-imc-calc')
var user = require('readline-sync')

var peso = user.questionFloat('Peso:')
var altura = user.questionFloat('Altura:')
 
const imc = new FasamImc(peso, altura); // peso, altura 
console.log(`Peso: ${imc.calc()}`)

//poso calcular diretamente
//const imc = new FasamImc();
//imc.calc(80, 1.80);