//Faça um programa onde o usuário irá escolhe se que Converte graus Celsius para Fahrenheit ou Fahrenheit para Celsius. 


var user = require('readLine-sync')
var opcao = user.question('Digite ****** 1-CELSIUS para FAHRENHEIT ****** 2-FAHRENHEIT para CELSIUS ******:')
var temperatura = user.question('Qual temperatura deseja converter:')

if (opcao == 1) {
    var f = (temperatura * 1.8) + 32
    console.log(`Temperatura: ${temperatura} em fahrenheit: ${f}`)
} else if (opcao == 2) {
    var c = (temperatura-32) / 1.8
    console.log(`Temperatura: ${temperatura} em celsius: ${c}`)
}
