//Tendo como entrada a altura e o sexo codificado da seguinte forma: 
//Valor 1 para feminino
//Valor 2 para masculino
//de uma pessoa, construa um programa que calcule e imprima seu peso ideal, utilizando as seguintes 
//Fórmulas: 
//- para homens: (72.7 * Altura) – 58 
//- para mulheres: (62.1 * Altura) – 44.7 

var user = require('readLine-sync')
var sexo = user.question('Informe seu sexo *** 1-Femenino *** 2-Masculino *** : ')
var altura = user.question('Informe sua altura:')
var pesoIdeal

if (sexo == 1) {
    pesoIdeal = (62.1 * altura) - 44.7
    console.log(`Seu peso ideal é: ${pesoIdeal}`)
} else if (sexo == 2) {
    pesoIdeal = (72.7 * altura) - 58
    console.log(`Seu peso ideal é: ${pesoIdeal}`)
} else {
    console.log('Opção invalida!')
}
