// Faça um programa que leia dois números, o primeiro é o valor inicial de um contador, e o
// segundo é o valor final do contador (verifique se o valor inicial fornecido é inferior ao
// valor final). Usando o comando For, escreva na tela uma contagem que comece no
// primeiro número lido, escreva os números seguintes colocando apenas um número em
// cada nova linha da tela, até chegar ao valor final indicado.
// Entre com o Valor Inicial: 11
// Entre com o Valor Final: 13
// Contagem:
// 11
// 12
// 13
// Final da contagem…

var user = require('readline-sync')
var numeriInicial = user.question('Digite um numero para inicializar o contador:')
var numeroFinal = user.question('Digite um numero para finalizar o contador:')
for(var i = numeriInicial; i <= numeroFinal; i++){
    console.log(i)
}

