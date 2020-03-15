// Faça um algoritmo que calcule a média de potência dos carros da Europe (Europa)
// Similar a atividade 2 porém usaremos o campo Origin para selecionar os carros da 
// europa e depois disso aplicar a média em cima do campo Horsepower.

var fs = require('fs')
var carros = require('./cars.json')
var filtrado = carros.filter(carro => carro.Origin == 'Europe')
var somaDasPotencias = filtrado.reduce((soma, carroatual) => soma + carroatual.Horsepower,0)
var mediaDaPotencia = somaDasPotencias/ filtrado.length
console.log(`Media de carros na Europa: ${mediaDaPotencia}`)
