// Escreva um programa que apresente quatro opções: 
// (a) consulta saldo, (b) saque e (c) depósito e (d) sair. 
// O saldo deve iniciar em R$ 0,00. 
// A cada saque ou depósito o valor do saldo deve ser atualizado. 

var user = require('readline-sync')
var opcao = 0
var conta
var opcaosaque
var opcaotrans
var saldo
var nome = ""
var cpf = ""
nome = user.question('Cliente:')
cpf = user.question('CPF:')

while (opcao != 2) {
    opcao = user.question('Deseja Cadastrar Novo Cliente ***** 1 - SIM ***** 2 - NÃO *****:')
    if (opcao == 1) {
        conta = user.question('Numero da conta:')
        saldo = user.question('Saldo da conta R$')
        console.log('Cliente cadastrado com sucesso')
        console.log(`Nome: ${nome}`)
        console.log(`CPF: ${cpf}`)
        console.log(`CONTA: ${conta}`)
        console.log(`SALDO: ${saldo}`)
        console.log('****** F I M ******')
    } else {
        conta = user.question('Numero da conta:')
        saldo = user.question('Saldo da conta R$')
        opcaosaque = user.question('Deseja fazer Saque ***** 1-SIM ***** 2-NÃO *****:')
        if (opcaosaque == 1) {
            var saque = user.question('Quanto Deseja Sacar R$')
            var saldototalsaque = saldo - saque;
            console.log(`Saldo atual R$ " ${saldototalsaque}`)
        }
        opcaotrans = user.question('Deseja transferir ***** 1-SIM ***** 2-NÃO *****:')
        if (opcaotrans == 1) {
            var transferencia = user.question('Quanto Deseja Transferir R$')
            var saldototal = saldo - transferencia
            console.log(`Saldo atual R$ ${saldototal}`)
        }
        
        console.log('****** F I M ******')
    }
}
