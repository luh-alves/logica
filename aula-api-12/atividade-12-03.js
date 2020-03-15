// Faça um algoritmo que receba um número de um episódio de Breaking Bad.
// Após isso o algoritmo deve imprimir o elenco de personagens e também de qual temporada é este episódio.
// Caso o episódio seja inválido dizer ao usuário que não existe este episódio.

var axios = require('axios').default
var user = require('readline-sync')
var espisodio = user.question('Digite um numero de episodio: ')

//chamando a minha api
axios.get(` https://www.breakingbadapi.com/api/episodes/${espisodio}`)
    .then(resposta => {
        console.log(`Elenco: ${resposta.data[0].characters}`)
        console.log(`Temporada: ${resposta.data[0].season}`)
    })
    .catch(() => console.log(`não existe este episódio.`))
