// Faça um programa que pergunte ao usuário se ele quer adicionar ou apenas exibir, 
// caso o usuário escolha adicionar, 
// altere o programa inicial de cadastro de carro para que não salve 1 objeto carro e sim uma coleção de carros 
// (utilizando arrays, em vez de serializar/deserializar o objeto será o array que possui os carros). 
// Após cadastrar o carro o programa deve novamente solicitar o usuário se quer exibir ou adicionar, 
// caso o usuário escolha exibir deve ser exibido todos os carros cadastrados. 	

const user = require('readline-sync')
const fs = require('fs')

var pergunta = user.question('Deseja Adicionar/exibir ou sair:')
while (pergunta !== 'sair') {
    if (pergunta === 'adicionar') {
        adicionarCarro()
    }else{
       console.log(lerCarros())
    }
    pergunta = user.question('Deseja Adicionar/exibir ou sair:')
}

function adicionarCarro() {
    var corCarro = user.question('Cor:')
    var modeloCarro = user.question('Modelo:')
    var marcaCarro = user.question('Marca:')

    var carro = new Object()
    carro.cor = corCarro
    carro.modelo = modeloCarro
    carro.marca = marcaCarro

    var carros = lerCarros()
    carros.push(carro)

    salvarCarros(carros)
}
function salvarCarros(carros) {
    //transforma array em string
    var jsonString = JSON.stringify(carros)
    //gravando a string no arquivo carros.json
    fs.writeFileSync('carros.json', jsonString)
}

function lerCarros() {
    try {
        var carros = fs.readFileSync('carros.json')
        return JSON.parse(carros)
    } catch (error) {
        return []
    }

}