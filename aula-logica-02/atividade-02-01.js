// Faça um programa que leia o valor de um produto X e leia a quantidade de reais de um cofrinho que contenha:  
// N moedas de 1 real; 
// N moedas de 50 centavos; 
// N moedas de 25 centavos; 
// N moedas de 10 centavos; 
// N moedas de 5 centavos; 
// N moedas de 1 centavos. 
// O programa deverá verificar se o total de reais que contém no cofrinho é o 
// bastante para compra o produto X e imprimir se possui ou não valor suficiente

var user = require('readLine-sync')
var valorProduto = user.question('Valor do Produto:')
var moeda1R = user.question('Número de moedas de 1 real:')
var moeda50 = user.question('Número de moedas de 50 centavos:')
var moeda25 = user.question('Número de moedas de 25 centavos:')
var moeda10 = user.question('Número de moedas de 10 centavos:')
var moeda5 = user.question('Número de moedas de 5 centavos:')
var moeda1 = user.question('Número de moedas de 1 centavos:')
var totalMoedar = moeda1R * 1
var totalMoeda50 = moeda50 * 0.50
var totalMoeda25 = moeda25 * 0.25
var totalMoeda10 = moeda10 * 0.10
var totalMoeda5 = moeda5 * 0.05
var totalMoeda1 = moeda1 * 0.01
var totalMoedas = Number(totalMoeda1)+Number(totalMoeda10)+Number(totalMoeda25)+
Number(totalMoeda25)+Number(totalMoeda5)+Number(totalMoeda50)+Number(totalMoedar)
if(valorProduto <= totalMoedas){
    console.log('Voce possiu valor suficiente')
}else{
    console.log('Voce não possui valor suficiente')
}


