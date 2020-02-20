// Uma empresa abriu uma linha de crédito para os funcionários.
// O valor da prestação não pode ultrapassar 30% do salário. 
// Faça um programa que receba o salário, o valor do empréstimo e o número de prestações e 
// informe se o empréstimo pode ser concedido. Nenhum dos valores informados pode ser zero ou negativo.


var user = require('readLine-sync')
var salario = user.question('Salario1:')
var valorEmprestimo = user.question('Valor Emprestimo:')
var numeroParcela = user.question('Numero de parcelas:')
var prestacao = valorEmprestimo / numeroParcela
var porcentagemSalario = (salario / 100) * 30
if(prestacao < porcentagemSalario){
    console.log('Emprestimo Concedido')
}else{
    console.log('Emprestimo Negado')
}
