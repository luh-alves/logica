// Faça um algoritmo que diga qual é o carro menos potente da lista cars.json. 
// Utilize o campo Horsepower para descobrir qual é o menos potente

var lodash = require('lodash')
var fs = require('fs')
var carros = require('./cars.json')
var carrosOrdenadosPorPotencia = lodash.sortBy(carros, c => c.Horsepower)
var carroMenosPotente = carrosOrdenadosPorPotencia[0]
console.log(carroMenosPotente.Car)