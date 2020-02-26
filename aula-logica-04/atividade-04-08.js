// Escreva um programa que simule uma partida de pedra papel e tesoura. 
// Deve ser solicitado o nome do jogador A e do jogador B.
// Após isso o programa deve pedir a jogada do jogador A e a jogada do jogador B.
// No final o programa deve imprimir quem ganhou.
// Dicas: 
// Papel ganha de pedra
// Tesoura ganha de papel
// Pedra ganha de tesoura
// Para não exibir a jogada do jogador utilize o comando de “password” no readline-sync 
const possiveisJogadas = ['pedra', 'papel', 'tesoura']
function validaJogada(jogada) {
    if (!possiveisJogadas.includes(jogada)) {
        throw Error('Jogada inválida')
    }
}
var user = require('readline-sync')
var jogadorA = user.question('Digite o nome do jogador A:')
var jogadorB = user.question('Digite o nome do jogador B:')
var jogadaDoJogadorA = user.question('Jogada do jogador A:', {hideEchoBack:true})
validaJogada(jogadaDoJogadorA)
var jogadaDoJogadorB = user.question('Jogada do jogador B:', {hideEchoBack:true})
validaJogada(jogadaDoJogadorB)
switch (jogadaDoJogadorA) {
    case 'papel':
        if (jogadaDoJogadorB == 'pedra') {
            console.log(`O ${jogadorA} ganhou!!`)
        } else if (jogadaDoJogadorB == 'tesoura') {
            console.log(`O ${jogadorB} ganhou!!`)
        }
        console.log(`>>>>>> F I M   D E   P A R T I D A <<<<<<   `)
        break
    case 'tesoura':
        if (jogadaDoJogadorB == 'pedra') {
            console.log(`O ${jogadorB} ganhou!!`)
        } else if (jogadaDoJogadorB == 'papel') {
            console.log(`O ${jogadorA} ganhou!!`)
        }
        console.log(`>>>>>> F I M   D E   P A R T I D A <<<<<<   `)
        break
    default:
        if (jogadaDoJogadorB == 'tesoura') {
            console.log(`O ${jogadorA} ganhou!!`)
        } else if (jogadaDoJogadorB == 'papel') {
            console.log(`O ${jogadorB} ganhou!!`)
        }
        console.log(`>>>>>> F I M   D E   P A R T I D A <<<<<<   `)
        break
}


