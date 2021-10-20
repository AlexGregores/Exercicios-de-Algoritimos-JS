//- Faça um algoritmo para calcular o novo salário sabendo que este
//tem aumento de 10% e imposto é de 6% já sobre o salário reajustado. Os cálculos
//devem ser feitos em função

function novoSalario(salario){
    let aumentodeSalario = salario + 10/100
    let imposto = aumentodeSalario - 6/100
    return imposto  
}
console.log(novoSalario(13000))