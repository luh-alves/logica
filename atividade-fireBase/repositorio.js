//criar tabela
var firebase = require('./firebase')
var nomeTabela = 'Atividade-18'
var bancoDeDados = firebase.database().ref(nomeTabela)

function cadastrarAtividade(atividade) {
    bancoDeDados.push(atividade)
}
function mostrarAtividade() {
    return new Promise((resolve, rejeita) => {
        bancoDeDados.on("value", (snapshot) => resolve(snapshot.val()), rejeita);
    })
}
module.exports = { cadastrarAtividade, mostrarAtividade }

