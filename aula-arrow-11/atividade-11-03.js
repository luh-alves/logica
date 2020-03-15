// Crie um algoritmo que conte quantos carros da Ford existem no cars.json.
// A resolução é similar ao exercício 1, porém utilize o método “includes” 
// com parâmetros “Ford” na propriedade Car para realizar a contagem.


var fs = require('fs')
var carros = require('./cars.json')
var filtrado = carros.filter(carro => carro.Car.includes('Ford'))
console.log(`Quantidade de carros da Ford:` , filtrado.length)