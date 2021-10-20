/*
Escreva uma função que receba dois parâmetros. O primeiro parâmetro é o elemento que repetirá, enquanto que
o segundo será o número de vezes que haverá repetição. Um array será retornado.
*/

// resolução 1

function repetir1(item,quantidade){
    let resultado = []
    for(let i = 0; i < quantidade; i++)
    resultado.push(item)
    return resultado
}
console.log(repetir1('salario',7))

// resolução 2
function repetir2(item, quantidade) {
    return Array(quantidade).fill(item)
}
    console.log(repetir2('salario',7))


    
    