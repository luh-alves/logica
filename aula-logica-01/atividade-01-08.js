//Escreva um programa que leia as medidas dos lados de um triângulo e escreva se ele é Equilátero, Isósceles ou Escaleno. 
//Sendo que: 
//− Triângulo Equilátero: possui os 3 lados iguais. 
//− Triângulo Isóscele: possui 2 lados iguais. 
//− Triângulo Escaleno: possui 3 lados diferentes. 

var user = require('readLine-sync')
var lado1 = user.question('Medida: ')
var lado2 = user.question('Medida: ')
var lado3 = user.question('Medida: ')

if(lado1 == lado2 && lado1 == lado3){
    console.log('É um triangulo EQUILÁTERO')
}else if(lado1 == lado2 || lado1 == lado3 || lado3 == lado2){
    console.log('É um triangulo ISÓSCELE')
}else{
    console.log('É um triangulo ESCALENO')
}
