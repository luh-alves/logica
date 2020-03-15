// Crie um algoritmo que conte quantos carros do Japan (Japão) existem na base cars.json
// O campo que define o país no cars.json é Origin
// A comparação da string pode ser utilizada usando a palavra “Japan”


var fs = require('fs')
var carros = require('./cars.json')
var filtrado = carros.filter(carro => carro.Origin == 'Japan')
console.log(`Quantidade de carros do japão: ${filtrado.length}`)