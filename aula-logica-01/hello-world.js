//console.log("Ola neura!")
//var nome
//console.log(nome) vai aparecer undefined
//nome = "Luciana Alves"
//var idade = 27
//console.log(`Boa noite meu nome é: ${nome} e tenho ${idade}`)

var user = require('readLine-sync')
var resultadoDoUsuario = user.question('Insira sua pergunta aqui:')
console.log(`O usuario inseriu : ${resultadoDoUsuario}`)