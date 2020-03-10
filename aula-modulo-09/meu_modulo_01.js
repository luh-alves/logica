var moduloArbyte = function () {
    console.log('Ola meu modulo')
}
var moduloArbyte2 = function(){
    console.log('Ola meu modulo , outra vez!!!')
}

//exporta modulo
//fiz um objeto, pq passei mais de um valor
//poderia ser assim>>>>>> module.exports.moduloArbyte = moduloArbyte
module.exports = {moduloArbyte,moduloArbyte2}

