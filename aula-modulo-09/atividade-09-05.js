//Faça um algoritmo que receba a data nascimento de uma pessoa e calcule sua idade.

var ageCalculator = require('age-calculator')
var user = require('readline-sync') 

//posso passar mais de uma variavael let{primeiro, Idade} = .....
//estou renomeando o Age que existe , 'age-calculator' só reconhece o que tem na documentação:AgeFromDate,AgeFromDateString
let {AgeFromDate:Idade} = require('age-calculator');

var ano = user.question('Ano:')
var mes = user.question('Mês:')
var dia = user.question('Dia:')


let idadeAtual = new Idade(new Date(ano, mes, dia)).age;
console.log(`Idade : ${idadeAtual}`);
