// Faça um algoritmo que receba uma CEP e diga qual é o endereço completo (Cidade, rua, estado) deste CEP.
// Utilize a API : https://api.postmon.com.br/v1/cep/{CEP}
// Exemplo CEP :https://api.postmon.com.br/v1/cep/89010020

var axios = require('axios').default
var user = require('readline-sync')
var cep= user.question('Digite um numero de CEP: ')

//chamando a minha api
axios.get(`https://api.postmon.com.br/v1/cep/${cep}`)
    .then(resposta => {
        console.log(`Cidade: ${resposta.data.cidade}`)
        console.log(`Rua: ${resposta.data.logradouro}`)
        console.log(`Bairro: ${resposta.data.bairro}`)
        console.log(`Estado: ${resposta.data.estado_info.nome}`)
    })
    .catch(() => console.log(`CEP Invalido`))