//Escreva um programa para ler 3 valores inteiros 
//(considere que  não serão lidos valores iguais) e escrevê-los em ordem crescente. 

var user = require('readLine-sync')
var numero1 = user.question('Digite um numero:')
var numero2 = user.question('Digite um numero:')
var numero3 = user.question('Digite um numero:')
var vetor = [Number(numero1), Number(numero2), Number(numero3)]
for (let j = 0; j < vetor.length; j++) {
    for (let i = 0; i < vetor.length; i++) {
        if (vetor[i] > vetor[i + 1]) {
            aux = vetor[i]
            vetor[i] = vetor[i + 1]
            vetor[i + 1] = aux
        }

    }

}
console.log(vetor)
//console.log(vetor.sort(function(a,b){
    //return a-b // crescente 
    //return b-a // decrescente
    
//}))






