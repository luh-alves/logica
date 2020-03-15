//Crie um algoritmo que solicite um número para o usuário e diga quantos carros mais potente que o valor informado.
//Para isso utiliza a propriedade “Horserpower” do cars.json

var user = require('readline-sync')
var fs = require('fs')
var carros = require('./cars.json')
var numero = user.questionInt('Digite um numero:')
var filtrado = carros.filter(carro => carro.Horsepower >= numero)
console.log(`Quantidade de carros com potencia maior ou igual a ${numero}:` , filtrado.length)



