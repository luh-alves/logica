// Faça um algoritmo que solicite ao usuário A ou B 
// Caso o usuário escolha A 
// 	O algoritmo deve imprimir toda informação do carro com maior aceleração
// Caso o usuário escolha B
// 	O algoritmo deve imprimir toda informação do carro com maior potência
// Se houver mais de um carro imprimir todos 1 por 1. 

var user = require('readline-sync')
var lodash = require('lodash')

var carros = require('./cars.json')

console.log('a - Carro com Maior Aceleração')
console.log('b - Carro com Maior Potência')
var opcao = user.question('Digite sua opcao:')

if (opcao === 'a') {
    filtrarCarros(carros, 'Acceleration')
} else if (opcao === 'b') {
    filtrarCarros(carros, 'Horsepower')

}

function filtrarCarros(carros, nomeDaPropriedadeDoCarroParaFiltrar) {
    var carrosOrdenadosPorPropriedade = lodash.sortBy(carros, c => c[nomeDaPropriedadeDoCarroParaFiltrar])
    var carroMaisTop = carrosOrdenadosPorPropriedade[carrosOrdenadosPorPropriedade.length - 1]
    var carrosFiltrados = carros.filter(carro => carro[nomeDaPropriedadeDoCarroParaFiltrar] === carroMaisTop[nomeDaPropriedadeDoCarroParaFiltrar])
    imprimirDadosDoCarro(carrosFiltrados)
}

function imprimirDadosDoCarro(carros) {
    carros.forEach(carro => {
        console.log(`Car: ${carro.Car}`)
        console.log(`MPG: ${carro.MPG}`)
        console.log(`Cylinders: ${carro.Cylinders}`)
        console.log(`Displacement: ${carro.Displacement}`)
        console.log(`Horsepower: ${carro.Horsepower}`)
        console.log(`Weight: ${carro.Weight}`)
        console.log(`Acceleration: ${carro.Acceleration}`)
        console.log(`Model: ${carro.Model}`)
        console.log(`Origin: ${carro.Origin}`)

    });
}
