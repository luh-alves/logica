//Escreva um programa que calcule a soma de todos os múltiplos de 3 e de 5 entre 1 e 1000. 

var somaTres = 0
var somaCinco = 0
var resultado = 0
for(var i = 1 ; i <= 10; i++){
    if(i % 3 === 0){
        somaTres = somaTres + i
    }else if(i % 5 === 0){
        somaCinco = somaCinco + i
    }
}

resultado = somaTres + somaCinco
console.log(`Soma dos multiplos: ${resultado}`)



