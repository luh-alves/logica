// Crie um programa que receba 3 entrada do usuário. A cor, o modelo e a marca, 
// crie um objeto Carro e atribua as entradas do usuário neste objeto.
// No final o programa deve imprimir as informações do carro.
// Utilize a criação de objetos para resolver este problema

const user = require('readline-sync')
var corCarro = user.question('Cor:')
var modeloCarro = user.question('Modelo:')
var marcaCarro = user.question('Marca:')

var carro = new Object()
carro.cor = corCarro,
carro.modelo = modeloCarro,
carro.marca = marcaCarro

console.log(JSON.stringify(carro))