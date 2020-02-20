// Elabore um algoritmo que calcule o que deve ser pago por um produto, solicitando o preço da etiqueta 
// do produto e a escolha da condição de pagamento. Utilize os códigos da tabela a seguir para ler qual 
// a condição de pagamento escolhida e efetuar o cálculo adequado. Código Condição de pagamento 
// 	- 1 À vista em dinheiro ou cheque, recebe 10% de desconto 
// 	- 2 À vista no cartão de crédito, recebe 15% de desconto 
// 	- 3 Em duas vezes, preço normal de etiqueta sem juros 
// 	- 4 Em duas vezes, preço normal de etiqueta mais juros de 10% 

var user = require('readLine-sync')
var valorPeca = user.question('Valor da etiqueta:')
console.log('Formas de pagamento')
console.log('1 - DINHEIRO')
console.log('2 - CRÉDITO Á VISTA')
console.log('3 - CREDITO 2X')
console.log('4 - CRÉDITO 3X')
var formaDePagamento = user.question('Escolha a Forma de Pagamento:')
var valorDesconto
var valorTotalDesconto
switch (Number(formaDePagamento)) {
    case 1:
        valorDesconto = (valorPeca / 100) * 10
        valorTotalDesconto = valorPeca - valorDesconto
        console.log(`Valor peça: ${valorPeca}`)
        console.log(`Valor do desonto: ${valorDesconto}`)
        console.log(`Valor total á pagar: ${valorTotalDesconto}`)
        break;
    case 2:
        valorDesconto = (valorPeca / 100) * 15
        valorTotalDesconto = valorPeca - valorDesconto
        console.log(`Valor peça: ${valorPeca}`)
        console.log(`Valor do desonto: ${valorDesconto}`)
        console.log(`Valor total á pagar: ${valorTotalDesconto}`)
        break;
    case 3:
        console.log(`Valor peça: ${valorPeca}`)
        console.log(`Valor total á pagar: ${valorPeca}`)
        break;
    case 4:
        valorDesconto = (valorPeca / 100) * 15
        valorTotalDesconto = Number(valorPeca) + Number(valorDesconto)
        console.log(`Valor peça: ${valorPeca}`)
        console.log(`Valor do juros: ${valorDesconto}`)
        console.log(`Valor total á pagar: ${Number(valorTotalDesconto)}`)
        break;
    default:
        console.log('Invalido')

}