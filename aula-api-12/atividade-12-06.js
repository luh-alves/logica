// Faça um algoritmo que receba uma equação do usuário e retorna o resultado simplificado
// Utilize a api : https://newton.now.sh/simplify/{equacao}
// Exemplo das entradas 
// 2*2 = 2 vezes 2
// 2+2 = 2 mais 2
// 2-2 = 2 menos 2
// 2(over)2 = 2 dividido por 2
// 2^2 = 2 elevado a 2


var axios = require('axios').default
var user = require('readline-sync')
var equacao = user.question('Digite uma equação: ')

//chamando a minha api
axios.get(`https://newton.now.sh/simplify/${equacao}`)
    .then(resposta => {
        console.log(`resultado ${resposta.data.result}`)
    })
    .catch(() => console.log(`Equação invalida`))