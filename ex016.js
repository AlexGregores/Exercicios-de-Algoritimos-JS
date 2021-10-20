/*
Crie uma função que receba dois números e retorne se o primeiro é maior ou igual ao segundo. Deverá diferenciar
números de strings.
*/
function maiorOuIgual(primeiro, segundo) {
    if(typeof primeiro != typeof segundo) return false
    return primeiro >= segundo
}
console.log(maiorOuIgual(5,5))
console.log(maiorOuIgual(1,5))
console.log(maiorOuIgual('oi',5))
console.log(maiorOuIgual(7,5))

