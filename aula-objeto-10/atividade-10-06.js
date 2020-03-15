var user = require('readline-sync')
var Carro = require('./carro')
var nome = user.question('Nome:')
var cor = user.question('Cor:')
var carro = new Carro(nome, cor)
function lerOpcao() {
    console.log('>>>>>> 1 - ACELERAR <<<<<<')
    console.log('>>>>>> 2 - FREIAR <<<<<<')
    console.log('>>>>>> 3 - DESLIGAR <<<<<<')
    return user.questionInt('Digite uma opção:')
}
while (true) {
    var opcao = lerOpcao()
    switch (opcao) {
        case 1:
            carro.acelerar()
            console.log(`Velocidade atual ${carro.velocidade}`)
            break
        case 2:
            carro.freiar()
            console.log(`Velocidade atual ${carro.velocidade}`)
            break
        case 3:
            var desligou = carro.desligar()
            if (desligou) {
                return
            } else {
                console.log(`Não é possivel deslogar o carro em movimento`)
            }

    }
}