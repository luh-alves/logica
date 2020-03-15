var user = require('readline-sync')
user.questionEMail('informe o email')
var caneca ={
    peso: 10,
    cor: 'branco',
    estaCheia: true,
    servir: function(){console.log('gluh gluh')},
    listaDeCoisasNaCaneca:['cafe', 'cha'],
    tipoDoCafe:{
        marca: 'pele',
        preco: 3
    }

}
var ultimaPosicao = caneca.listaDeCoisasNaCaneca.length-1
console.log(caneca.listaDeCoisasNaCaneca[ultimaPosicao])
