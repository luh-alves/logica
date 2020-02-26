// Ler o nome de um aluno e suas duas notas A e B, e após calcular a média ponderada entre
// estas notas (A tem 30% do peso do grau final e B tem 70% do peso). Repetir este
// procedimento para uma turma composta por cinco alunos, usando o comando For.
// Exemplo de tela de saída:
// Entre com o nome do aluno: João da Silva
// Entre com o grau A: 5.0
// Entre com o grau B: 6.0
// O aluno João da Silva tem uma média:5.7

var user = require('readline-sync')
var nomeAluno
var notaA
var notaB
var totalNotaA
var totalNotaB
for (var i = 0; i < 5; i++) {
    nomeAluno = user.question('Nome Aluno:')
    notaA = user.question('Nota A:')
    notaB = user.question('Nota B:')
    totalNotaA = notaA * 0.30
    totalNotaB = notaB * 0.70
    media = (Number(totalNotaA)+Number(totalNotaB)) / 2
    console.log(`O aluno ${nomeAluno} tem media: ${media}`)

}
