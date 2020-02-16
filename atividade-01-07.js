//Escreva um programa para ler o número de lados de um polígono regular e a medida do lado (em cm). Calcular e imprimir o seguinte: 
//− Se o número de lados for igual a 3 escrever TRI NGULO e o valor da área 
//− Se o número de lados for igual a 4 escrever QUADRADO e o valor da sua área. 
//− Se o número de lados for igual a 5 escrever PENTÁGONO. 

var user = require('readLine-sync')
var poligono = user.question('Quantidade de lados: ')
var area
function getTanDeg(deg) {
    var rad = deg * Math.PI / 180;
    return Math.tan(rad);
}
if (poligono == 3) {
    var base = user.question('Base: ')
    var altura = user.question('Altura: ')
    area = (base * altura) / 2
    console.log(`É um TRIANGULO com area: ${area}`)
} else if (poligono == 4) {
    var lado = user.question('Lado: ')
    area = lado * lado
    console.log(`É um QUADRADO com area: ${area}`)
} else {
    var lado = user.question('Lado: ')
    area = (5 * Math.pow(lado, 2)) / (4 * getTanDeg(36))
    console.log(`É um PENTÁGONO com area: ${area}`)
}



