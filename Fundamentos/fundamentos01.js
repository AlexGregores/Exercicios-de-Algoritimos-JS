// 01) Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração,
//multiplicação e divisão desses valores.

function calcular(a,b){
    return console.log("Resultado da soma:", a + b) + console.log("Resultado da subtração:", a - b) + console.log("Resultado da multiplicação:", a * b)+console.log("Resultado da divisao:", a / b)
}
calcular(5,5)

//resolução do exercício pela Udemy

function calcularOperacoes (operador1, operador2) {
    console.log(operador1+operador2, operador1-operador2, operador1*operador2, operador1/operador2);
}

calcularOperacoes(5, 5)
