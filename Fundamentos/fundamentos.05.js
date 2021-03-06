/*
Desenvolva uma função que recebe dois números inteiros não negativos (maiores ou iguais a zero) e realize a
multiplicação deles. Porém, não utilize o operador de mutiplicação
*/

// resolução 1
function multiplicar(numeroA, numeroB) {
    let resultado = 0
    /* a otimização feita para diminuir a quantidade de chamadas recursivas pode ser
    realizada aqui para diminuir a quantidade de loops */
    for(let i = 0; i < numeroB; i++)
    resultado += numeroA
    return resultado
    }
// resolução 2
function multiplicar(numero, multiplicador) {
    if (numero === 0 || multiplicador === 0) return 0
    return multiplicador === 1 ? numero : numero + multiplicar(numero, multiplicador-1)
}    