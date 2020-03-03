// Faça uma função que recebe por parâmetro um valor inteiro e positivo e retorna o valor lógico
// Verdadeiro caso o valor seja primo e Falso em caso contrário.
// Solicite ao usuário o número e no final imprima se é primo ou não 
// utilizando a função na condição IF.

function verificarNumeroPrimo(numero) {
    for (var i = 2; i <= numero / 2; i++) {
        if (numero % i == 0) {
            return false
        }
    }
    return true
}
user = require('readline-sync')
var numero = user.question('Digite um numero:')

if (verificarNumeroPrimo(numero)) {
    console.log('É primo')
} else {
    console.log('Não é primo')
}