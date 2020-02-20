//As maçãs custam R$ 0,30 cada se forem compradas menos do que uma dúzia, 
//e R$ 0,25 se forem compradas pelo menos doze. Escreva um programa que leia 
//o número de maçãs compradas, calcule e escreva o valor total da compra

var user = require('readLine-sync')
var macasCompradas = user.question('Quantas maçãs foram compradas:')
var valorTotalMenor = macasCompradas * 0.30
var valorTotalMaior = macasCompradas * 0.25
if(macasCompradas < 12){
    console.log(`Foram compradas: ${macasCompradas} maçãs`)
    console.log(`Valor para pagar: ${valorTotalMenor} reais`)
}else{
    console.log(`Foram compradas: ${macasCompradas} maçãs`)
    console.log(`Valor para pagar: ${valorTotalMaior} reais `)
}
