// Faça uma função que recebe por parâmetro o raio de uma esfera e calcula o seu volume (v = 4/3.pi.R3).
// Então solicite ao usuário o raio e a esfera e utilize a função para exibir o resultado.

function calcularRaio(raio){
    var volume = (4/3) * 3.14 * raio ** 3
    return volume
}
console.log(`Valor do volume da esfera: ${calcularRaio(2)}`)