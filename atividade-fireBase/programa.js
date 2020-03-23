var user = require('readline-sync')
var rep = require('./repositorio')
async function escolherOpcoes () {
    do {
        console.log('Digite A para cadastrar')
        console.log('Digite B para mostrar a atividade')
        console.log('Digite C para sair')
        var resposta = user.question('Resposta: ')
        if (resposta === 'A') {
            var atividade = user.question('Qual a atividade? ')
            var data = user.questionInt('Qual a data? ')
            var tipo = user.question('Qual o tipo? ')
            var titulo = user.question('Qual o titulo da atividade? ')
            rep.cadastrarAtividade({
                atividade,
                data,
                tipo,
                titulo
            })
        } else if (resposta === 'B') {
             var res = await rep.mostrarAtividade()
             console.log(res)
        } else if (resposta !== 'C') {
            console.log("Opção invalida tente novamente ")
        }
    } while (resposta !== 'C')
    console.log('Operação Encerrada!')
}
escolherOpcoes()

