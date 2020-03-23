var axios = require('axios').default
var repositorioCorona = require('./corona-repositorio')
var db = require('./db')

//chamando a minha api
function consumirApi() {
    return axios.get('https://api.covid19api.com/summary')

}

db.getDb().then(async database => {
    var repositorio = repositorioCorona(database)
    try {
        await repositorio.removerTabela()
    } catch (error) {
        console.log('Erro Delecao', error)
    }

    var resultado = await consumirApi()
    await repositorio.criaTabela()
    resultado.data.Countries.forEach(async elemento => {
        await repositorio.inserirTabela(elemento)
    });
})



