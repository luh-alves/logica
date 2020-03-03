// Escreva uma função que receba dois números o primeiro será a base e o segundo a 
// potência e no final a função retorna a base elevada pela potência.
// Faça um programa que peça ao usuário a base e a potência e forneça para a 
// função, no final imprima o resultado. 
// OBS: O algoritmo só precisa saber lidar com números inteiros.

function raizQuadrada(base,potencia){
    var resultado = base ** potencia
    return resultado

}
var user = require('readline-sync')
var x = user.question('Digite um numero para base:')
var y = user.question('Digite um numero para potência:')
console.log(raizQuadrada(x,y))