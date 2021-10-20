//Faça um algoritmo para calcular o valor do imposto e o valor do
//desconto de um salário. Sabe-se que o imposto de é 7% e o desconto é de 5%, em
//que cada operação deve ser realizada em um sub-rotina apropriada.

function calcularSalarioComDesconto(salario){
   
    var desconto = salario * 7/100;
    var imposto = salario * 5/100;
    var salario = salario - desconto - imposto;

   console.log("Desconto:", + desconto) 
   console.log("Impostos:", + imposto) 
   console.log("O seu salario é: ",+ salario)
   
}
calcularSalarioComDesconto(13000)


