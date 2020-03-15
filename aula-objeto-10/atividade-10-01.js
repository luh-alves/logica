//Criar um algoritmo que receba 2 carros e verifique se os carros são iguais
//Para isso : 
//Crie uma classe Carro que receba as variáveis nome, modelo e cor no construtor e inicialize as propriedades com estes valores. 
//Após isso informe ao usuário para cadastrar o primeiro carro e peça, o nome, modelo e cor. 
//Após informar o primeiro carro peça o segundo carro também solicitando nome, modelo e cor. 
//Ao final o algoritmo deve comparar se os carro são iguais.
//Um carro vai ser igual ao outros se modelo e nome possuem o mesmo valor. 

var user = require('readline-sync')
var Carro = require('./carro')
var nome = user.question('Nome:')
var modelo = user.question('Modelo:')
var cor = user.question('Cor:')
var carro1 = new Carro(nome, modelo, cor)
var nomeCarro2 = user.question('Nome:')
var modeloCarro2 = user.question('Modelo:')
var corCarro2 = user.question('Cor:')
var carro2 = new Carro(nomeCarro2, modeloCarro2, corCarro2)
carro2.compararCarro(carro1)