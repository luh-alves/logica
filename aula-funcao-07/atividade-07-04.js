// Faça um procedimento que recebe, por parâmetro, um valor N e calcula e escreve 
// a tabuada de 1 até N. Mostre a tabuada na forma:
// 1 x N = N
// 2 x N = 2N
// N x N = N2
// Após isso solicite o usuário um número e forneça o argumento do usuário para a função.

function calculartabuada(x){
    var i=1
    while(i <= x){
        console.log(`${i} X ${x} = ${i*x}`)
        i++;
    }
}
var user = require('readline-sync')
var numero = user.question('Digite um numero:')
calculartabuada(numero)