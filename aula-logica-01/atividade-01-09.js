//Escreva um programa que leia o valor de 3 ângulos de um triângulo e escreva se o triângulo é Acutângulo, Retângulo ou Obtusângulo. 
//Sendo que: 
//− Triângulo Retângulo: possui um ângulo reto. (igual a 90º) 
//− Triângulo Obtusângulo: possui um ângulo obtuso. (maior que90º) 
//− Triângulo Acutângulo: possui três ângulos agudos. (menor que 90º)

var user = require('readLine-sync')
var angulo1 = user.question('Ângulo: ')
var angulo2 = user.question('Ângulo: ')
var angulo3 = user.question('Ângulo: ')

if(angulo1 == 90 || angulo2 == 90 || angulo3 == 90){
    console.log(' Triângulo Retângulo')
}else if(angulo1 > 90 || angulo2 > 90 || angulo3 > 90){
    console.log(' Triângulo Obtusângulo')
}else{
    console.log(' Triângulo Acutângulo')
}
