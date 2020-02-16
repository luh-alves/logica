//Faça um algoritmo que leia o nome, o sexo e o estado civil de uma pessoa. 
//Caso sexo seja “F” e estado civil seja “CASADA”, solicitar o tempo de casada (anos). 

var user = require('readLine-sync')
var nome = user.question('Nome: ')
var sexo = user.question('Sexo: ')
var estadoCivil = user.question('Estado Civil: ')
var tempoCasada

if(sexo == 'f' && estadoCivil == 'casada'){
    tempoCasada = user.question('Tempo de casada: ')
    console.log(`Nome: ${nome} , sexo: ${sexo}, tempo de casa: ${tempoCasada} anos`)
}else{
    console.log(`Nome: ${nome} , sexo: ${sexo}`)
}



