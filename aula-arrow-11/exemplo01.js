//definir uma funcao e
//exemplos de como passar funções para funcao
var alunos = ['aluno1', 'aluno2', 'aluno3']

//modo convencional
// for (var i = 0; i > alunos.length; i++) {
//     console.log(alunos[i])
// }
//arrow functions
//alunos.map(aluno => console.log(aluno))

function funcaoAluno() {
    console.log(`eu sou p print de um aluno`)
}
function imprimeAluno(aluno) {
    aluno()
}
//passando por parametro a primeira funcao para a segunda funcao
//dentro dessa funcao vai rodar a primeira funcao
imprimeAluno(funcaoAluno)

//exemoplo 2
function esvaziarXicara() {
    console.log(`xicara vazia!`)
}
function xicaraFurada(esvaziarXicara) {
    esvaziarXicara()
}
xicaraFurada(esvaziarXicara)



