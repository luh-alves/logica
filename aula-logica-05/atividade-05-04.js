// Ler o nome de um aluno e suas duas notas A e B, e após calcular a média ponderada entre
// estas notas (A tem 30% do peso do grau final e B tem 70% do peso). Repetir este
// procedimento para uma turma composta por cinco alunos, usando o comando For.
// Exemplo de tela de saída:
// Entre com o nome do aluno: João da Silva
// Entre com o grau A: 5.0
// Entre com o grau B: 6.0
// O aluno João da Silva tem uma média:5.7

var user = require('readline-sync')
//array de armazenamento
var alunos = []
var notasA = []
var notasB = []
var mediaPonderada



for (var i = 0; i < 5; i++) {
    //pedir dados do usuario
    var nomeAluno = user.question('Nome Aluno:')
    var notaA = user.questionFloat('Nota A:')
    var notaB = user.questionFloat('Nota B:')

    //calculo media ponderada
    //var media = (notaA * 0.3) + (notaB * 0.7)
    //console.log(`O aluno ${nomeAluno} tem media: ${media}`)

    alunos.push(nomeAluno)
    notasA.push(notaA)
    notasB.push(notaB)

}

for (var j = 0; j < 5; j++) {
    console.log(`Nome do aluno: ${alunos[j]}\n
    Nota prova B: ${notasA[j]}\n
    Nota prova A: ${notasB[j]}\n
    Media ponderada do aluno: ${(notasA[j] * 0.3) + (notasB[j] * 0.7)}\n`)
}
