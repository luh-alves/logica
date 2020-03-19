var readline = require('readline-sync')
var carro_rep = require('./carros-repositorio')
const cTable = require('console.table');
var db = require('./db')

db.getDb().then(async database => {
    var choice = "";
    var repositorio = carro_rep(database);
    await repositorio.criaTabela();
    do {
        console.log('--------------------------ESCOLHA--------------------------')
        console.log("Insira A para inserir")
        console.log("Insira B para mostrar")
        console.log('Insira C para remover')
        console.log('Insira D para pesquisar por veiculo mais caro')
        console.log('Insira E para  pesquisar por veiculo mais barato')
        console.log('Insira F para ordenação por preço')
        console.log('Insira G para contagem de carros')
        console.log('Insira H para pesquisa por cor')
        console.log('Insira I para pesquisa por ano')
        console.log('Insira J para pesquisa por ano maior que')
        console.log('Insira L para pesquisa por ano menor que')
        console.log("Insira W para sair")
        choice = await readline.question("Escolha : ")
        if (choice === "A") {
            console.clear()
            console.log('--------------------------CADASTRAR CARRO--------------------------')
            var carro = {
                nome: readline.question("Insira nome do carro : "),
                cor: readline.question("Insira a cor do carro  : "),
                ano: readline.questionInt("Insira o ano do carro : "),
                valor: readline.questionInt("Insira o valor do carro : ")
            }
            await repositorio.insereCarro(carro).then(p => {
                // console.clear()
                console.log("Carro inserido com sucesso")
            }).catch(p => {
                console.log("Não foi possível inserir o carro")
            })

        } else if (choice === "B") {
            console.clear()
            const carros = await repositorio.mostraCarro();
            console.table(carros)
        } else if (choice === "C") {
            console.clear()
            const nomeParaDeletar = readline.question('Nome do Carro Para Deletar Arromabdo: ')
            await repositorio.removeCarro(nomeParaDeletar)
        } else if (choice === 'D') {
            console.clear()
            const maiorValorCarro = await repositorio.maiorValor()
            console.table(maiorValorCarro)
        } else if (choice === 'E') {
            console.clear()
            const menorValorCarro = await repositorio.menorValor()
            console.table(menorValorCarro)
        } else if (choice === 'F') {
            console.clear()
            const ordenarPreco = await repositorio.ordernarPorPreco()
            console.table(ordenarPreco)
        } else if (choice === 'G') {
            console.clear()
            const contarCarro = await repositorio.contarCarro()
            console.table(contarCarro )
        } else if (choice === 'H') {
            console.clear()
            const cor = readline.question('Cor: ')
            const pesquisarPorCor = await repositorio.pesquisarPorCor(cor)
            console.table(pesquisarPorCor)
        } else if (choice === 'I') {
            console.clear()
            const ano = readline.question('Ano: ')
            const pesquisarCarroAno = await repositorio.pesquisarPorAno(ano)
            console.table(pesquisarCarroAno)
        } else if (choice === 'J') {
            console.clear()
            const resposta = readline.question('Pesquisar por Ano Maior que:')
            const pesquisarCarroAnoMaior = await repositorio.pesquisarPorAnoMaior(resposta)
            console.table(pesquisarCarroAnoMaior)
        } else if (choice === 'L') {
            console.clear()
            const resposta1 = readline.question('Pesquisar por Ano Maior que:')
            const pesquisarCarrorAnoMenor = await repositorio.pesquisarPorAnoMenor(resposta1)
            console.table(pesquisarCarrorAnoMenor )
        } else if (choice !== "W") {
            console.clear()
            console.log("Opção invalida tente novamente ")
            console.log()


        }
    } while (choice !== "W")

});