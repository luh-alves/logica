// Faça uma função que recebe a idade de uma pessoa em anos, meses e dias e retorna essa idade expressa em dias.
// Solicite a data ao usuário e o algoritmo imprime a quantidade de dias como resultado utilizando a função criada.

function idadeEmDias(anos, meses, dias){
    var anoEmDias = anos*365
    var mesesEmDias = meses*60
    return total = anoEmDias + mesesEmDias + dias

}
var user = require('readline-sync')
var anos = user.question('Idade:')
var meses = user.question('Mês:')
var dias = user.question('Dias:')

console.log(`Dias: ${idadeEmDias(anos,meses,dias)}`)