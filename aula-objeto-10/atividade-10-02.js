// Crie um algoritmo que cadastre 3 alunos e diga qual possui a maior idade, se mais 
// de um possuir maior idade apresentar o nome de todos os que possuem maior idade.
// Para isso crie uma classe Aluno que receba duas variáveis no construtor nome e idade 
// e inicialize essas variáveis nas propriedades do objeto.
// Após isso peça para o usuário cadastrar o primeiro aluno e solicite nome e idade. 
// Crie o objeto do aluno e adicione em um array.
// Repita esse passo para os outros alunos. 
// Ao final o algoritmo deve iterar pelo array de alunos  e descobrir quais são os alunos 
// com maior idade e imprimir seus nomes.

var user = require('readline-sync')
var calculaMedia = require('./calcula-media')
class Aluno {
    constructor(nome, idade) {
        this.nome = nome
        this.idade = Number(idade)
    }
}
var alunos = []
for (var i = 0; i < 3; i++) {
    var nome = user.question('Nome:')
    var idade = user.question('Idade:')
    var aluno = new Aluno(nome, idade)
    alunos.push(aluno)

}
for (var i = 0; i < alunos.length; i++) {
    if (alunos[i].idade > 17) {
        console.log(`Nome: ${alunos[i].nome} , idade: ${alunos[i].idade}`)

    }
}
var media = calculaMedia.calculaMediaIdadeAluno(alunos)
console.log(`Media das idades: ${media}`)




