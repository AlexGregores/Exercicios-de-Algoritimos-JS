//Dada a função calculaIdade , utilize os metodos call e apply para modificar o valor de this. Crie seu proprio objeto para essa atividade

function calculaIdade(anos){
    return `Daqui a ${anos} anos, ${this.nome} terá  ${this.idade + anos} anos de idade.`;
}
const pessoa1 ={
    nome: 'Maria',
    idade:30
}
const pessoa2 ={
    nome: 'Joao',
    idade:30
}
const animal ={
    nome: 'Dog',
    idade:13,
    raca:'Pastor '
};
console.log(calculaIdade.call(pessoa2,20))
console.log(calculaIdade.call(animal,20))

console.log(calculaIdade.apply(pessoa1,[5]))




