//Escreva um programa para ler o ano de nascimento de uma pessoa e 
//escrever uma mensagem que diga se ela poderá ou não votar este ano 
//(não é necessário considerar o mês em que ela nasceu).

var user = require('readLine-sync')
var anoAtual = 2020
var anoNascimento = user.question('Ano de nascimento:')
var idade = anoAtual - anoNascimento
if(idade >= 16 ){
    console.log(`Você pode votar pois tem : ${idade}`)
}else{
    console.log(`Você não pode votar`)
}
