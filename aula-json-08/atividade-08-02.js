// Adicione no programa anterior após a impressão dos dados que ele salve o objeto carro em formato JSON. 
// Utilize o JSON.stringify para transformar o objeto em string e após isso utilize os métodos da biblioteca ‘fs’ para salvar o arquivo.
// Salve o json como ‘carro.json’

const fs = require('fs')
const user = require('readline-sync')
var corCarro = user.question('Cor:')
var modeloCarro = user.question('Modelo:')
var marcaCarro = user.question('Marca:')

var carro = new Object()
carro.cor = corCarro,
carro.modelo = modeloCarro,
carro.marca = marcaCarro

var jsonString = JSON.stringify(carro)
console.log(jsonString)
//gravando a string no arquivo carro.json
fs.writeFileSync('carro.json',jsonString)
