/* Faça um algoritmo para calcular o novo salário de um funcionário. Sabe-se que  os  funcionários que possuem salário atual até R$500,00 terão aumento de 20%; os demais terão aumento de 10%.*/

function salarioNovo(salarioAtual){


    if(salarioAtual<= 500){
        return salarioAtual  * 1.20
    }
    else{
        return salarioAtual * 1.10 
    }
}
console.log(salarioNovo(5000))




