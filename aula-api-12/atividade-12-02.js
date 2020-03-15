//Faça um algoritmo que imprima uma frase aleatória de Breaking Bad e também seu autor

var axios = require('axios').default

//chamando a minha api
axios.get('https://breaking-bad-quotes.herokuapp.com/v1/quotes')
    .then(resposta => {
        console.log(`Frase: ${resposta.data[0].quote}`)
        console.log(`Autor: ${resposta.data[0].author}`)      
    })