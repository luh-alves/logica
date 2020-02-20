//Faça um programa que pergunte ao usuário escolher duas opções A e B. 
//A encerra o programa, B é pra fazer uma soma.
//Se o usuário inserir A o programa fecha
//Se o usuário inserir B o programa vai realizar uma operação de soma, 
//solicitando dois números inteiros (n1 e n2) onde após o usuário inserir o 
//segundo número o algoritmo deve apresentar a soma e também pergunta se quer realizar outro cálculo.
//Se o usuário inserir qualquer coisa diferente de A ou B o programa deve dizer que não entendeu o comando 
//e solicitar novamente para inserir A ou B

var user 
var opcao 
var cont
while (opcao != 'A') {
    var user = require('readline-sync')
    var opcao = user.question('Opção **** A - FECHA **** B - SOMA ****:')
        if(opcao == 'B'){
            var numero = user.question('Digite um numero:')
            var numero2 = user.question('Digite um numero:')
            var soma = Number(numero) + Number(numero2)
            console.log(`A soma dos numeros: ${soma}`)
        }
    cont++
}

