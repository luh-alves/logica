//Fazer um algoritmo que receba 5 números e mostra o produto dos ímpares e a soma dos pares
//EX: valores fornecidos 1,2,3,4,5
//Impares -> 1 * 3  * 5 = 15
//Pares -> 2 = 4 = 6
//O programa imprime : 
//Produtos dos impares : 15
//Soma dos pares : 6

var user = require('readline-sync')
var totalPar = 0
var totalImpar = 1
var cont = 0
while(cont <= 4){
    var numero = user.question('Digite um numero:')
    if(numero % 2 == 0){
        totalPar = Number(totalPar) + Number(numero)
    }else{
        totalImpar = totalImpar * numero
    }
    cont++
}
console.log(`Soma dos numeros pares: ${totalPar}`)
console.log(`Produto dos numeros ímpares: ${totalImpar}`)



