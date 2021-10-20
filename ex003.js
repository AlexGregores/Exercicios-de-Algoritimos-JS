// Faça um algoritmo para calcular a média aritméticaentre duas notas de um aluno e ////mostrar sua situação, sendo este aluno aprovado ou reprovado.


var nota1 = 5;
var nota2 = 6;
var media = (nota1 + nota2) /2

function mediaFinal(nota1,nota2){
    if(media >=7){
        console.log("Aprovado" , media)
    }
    else{
        console.log("Reprovado", media)
    }
}
mediaFinal() 
