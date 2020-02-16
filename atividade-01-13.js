//Encontrar o dobro de um número caso ele seja positivo e o seu triplo caso seja negativo, imprimindo o resultado.

var user = require('readLine-sync')
var numero = user.question('Numero: ')
var total

if(numero > 0){
    total = numero * 2
    console.log(`O dobro do numero: ${numero} é ${total}`)
}else{
    total = numero * 3
    console.log(`O dobro do numero: ${numero} é ${total}`)
}
