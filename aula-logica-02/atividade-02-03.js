// Fazer um programa que leia um valor de DDI e informe o nome do país Correspondente ao DDI. Por exemplo: 
// Se lê 1 imprime "Estados Unidos", 
// Se lê 49 imprime "Alemanha",
// Se lê 54 imprime "Argentina",
// Se lê 55 imprime "Brasil",
// Se lê 35 imprime "Portugal". 
// Deve também imprimir uma mensagem caso o DDI não esteja cadastrado.


var user = require('readLine-sync')
var ddi = user.question('Digite o Número do DDI:')
switch (Number(ddi)) {
    case 1:
        console.log('****** ESTADOS UNIDOS ******')
        break;
    case 49:
        console.log('****** ALEMANHA ******')
        break;
    case 54:
        console.log('****** ARGENTINA ******')
        break;
    case 55:
        console.log('****** BRASIL ******')
        break;
    case 35:
        console.log('****** PORTUGAL ******')
        break;
    default:
        console.log('DDI não cadastrado')

}