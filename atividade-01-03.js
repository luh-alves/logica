//Escreva um programa que verifique a validade de uma senha fornecida pelo usuário. 
//A senha válida é o número 1234. 
//Devem ser impressas as seguintes mensagens: 
//- ACESSO PERMITIDO caso a senha seja válida. 
//- ACESSO NEGADO caso a senha seja inválida


var user = require('readLine-sync')
var senha = user.question('Digite a Senha:')
//var senhaCorreta = 1234
if(senha == '1234' ){
    console.log(`ACESSO PERMITIDO`)
}else{
    console.log(`ACESSO NEGADO`)
}