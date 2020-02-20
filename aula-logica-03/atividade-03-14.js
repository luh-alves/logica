//Fazer um algoritmo que receba 8 idades do usuário e no final ele imprimir qual é a menor idade.


var cont = 0
var menorIdade = 100
while (cont < 3) {
    var user = require('readline-sync')
    idade = Number(user.question('digite sua idade:'))
    console.log(idade)
    if (idade < menorIdade) {
       menorIdade = idade 
    
    }
    cont++
}
console.log(`A menor idade: ${menorIdade}`)