//Elabore um programa para testar se uma senha digitada é igual a “batatafrita”. Se a senha estiver correta escreva 
//“Acesso permitido”, do contrário emita a mensagem “Você não tem acesso ao sistema”.

var user = require('readLine-sync')
var senhaDigitada = user.question('Senha:')
//var senhaCerta = "batatafrita"
if (senhaDigitada === "batatafrita") {
    console.log('Acesso Permitido')

} else {
    console.log('Acesso Negado')
}

