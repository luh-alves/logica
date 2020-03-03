// Faça uma função que receba um número e retorne se é perfeito ou não.
// Após isso solicite ao usuário para inserir um número e imprimir se é 
// perfeito ou não utilizando a função e imprimindo o resultado no final.
// OBS: Um número perfeito é aquele que a soma do seus divisores (auto excluindo) 
// é igual a ele mesmo Exemplo 6 possui os seguintes divisores 1 + 2 + 3 = 6

function numeroPerfeito(n){
    var soma=0
    for(var i = 1 ; i < n ; i++){
        if(n % i == 0){           
            soma = soma + i           
        }
    }
    if(soma == n){
        console.log(`O numero ${n}, é perfeito`)
    }else{
        console.log(`O numero ${n}, não é perfeito`)
    }
}
var user = require('readline-sync')
var numero = user.question('Digite um numero:')
numeroPerfeito(numero)