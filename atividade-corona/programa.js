var readline = require('readline-sync')
var carona = require('./corona-repositorio')
var db = require('./db')

db.getDb().then(async database => {
    var choice = "";
    var repositorio = carona(database);
    do {
        console.log('--------------------------ESCOLHA--------------------------')
        console.log("Insira A para Países Mais infectados")
        console.log('Insira B para paíse com novos casos')
        console.log('Insira C para países com Maior mortalidade')
        console.log('Insira D para países com Menor mortalidade')
        console.log('Insira E para países com Maior numeros de Recuperados')
        console.log('Insira F para escolha de pais')
        console.log('Insira G para Percentual de mortalidade nos mais infectados')
        console.log('Insira H para Percentual de recuperação nos mais infectados')
        console.log("Insira W para sair")
        choice = await readline.question("Escolha : ")
        if (choice === "A") {
            console.clear()
            const maisInfectados = await repositorio.paisesMaisInfectados()
            console.table(maisInfectados)
        } else if (choice === 'B') {
            console.clear()
            const novosCasos = await repositorio.paisesComNovosInfectados()
            console.table(novosCasos)
        } else if (choice === 'C') {
            console.clear()
            const maiorMortalidade = await repositorio.paisesComMaiorMortalidade()
            console.table(maiorMortalidade)
        } else if (choice === 'D') {
            console.clear()
            const menorMortalidade = await repositorio.paisesComMenorMortalidade()
            console.table(menorMortalidade)
        } else if (choice === 'E') {
            console.clear()
            const recuperados = await repositorio.recuperados()
            console.table(recuperados)
        } else if (choice === 'F') {
            console.clear()
            const pais = readline.question('Nome do País: ')
            const res = await repositorio.escolherPais(pais)
            if (res.length == 0) {
                console.log('Erro!! ', pais, 'não existe')
            } else {
                console.table(res)
            }
        } else if (choice === 'G') {
            console.clear()
            const mortalidade = await repositorio.porcentualDeInfectadosPorPais()
            console.table(mortalidade)
        } else if (choice === 'H') {
            console.clear()
            const taxaRecuperados = await repositorio.porcentualDeRecuperacaoPorPais()
            console.table(taxaRecuperados)
        } else if (choice !== "W") {
            console.clear()
            console.log("Opção invalida tente novamente ")
            console.log()


        }
    } while (choice !== "W")

});