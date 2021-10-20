/*
Elabore uma função que recebe um número como parâmetro e retorne uma string com o símbolo "+" na
quantidade especificada no parâmetro.
*/
// 1 resolução
function simboloMais(quantidade) {
    let resultado = ''
    for(let i = 0; i < quantidade; i++)
    resultado += '+'
    return resultado
}
// 2 resolução
function simboloMais(quantidade) {
    return Array(quantidade).fill('+').join('')
}
// resolução 3
function simboloMais(quantidade) {
    return "+".repeat(quantidade)
}
