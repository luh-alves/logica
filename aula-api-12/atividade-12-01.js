// Solicite ao usuário para inserir yes ou no
// Após isso utilize a API https://yesno.wtf/api
// Esta api traz um dado aleatório yes ou no 
// No final imprima se o usuário acertou ou não

var user = require('readline-sync')
var axios = require('axios').default

//perguntando do usuario
var res = user.question('Digite sim ou nao: ')

//chamando a minha api
axios.get('https://yesno.wtf/api')
    .then(resposta => {
        var respostaUsuario = resposta.data.answer
        //testando se o que o usuario respondeu é o mesmo que a api devolveu
        if (respostaUsuario === res) {
            console.log('Acertou')
            console.log(`Imagem: ${resposta.data.image}`)
            console.log(`forced: ${resposta.data.forced}`)
        }else{
            console.log('Errou')
        }
    })
