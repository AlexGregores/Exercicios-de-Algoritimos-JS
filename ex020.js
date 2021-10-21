//1- crie uma função que receba um array alunos, e um numero que ira repr5esentar a media final
// 2- percorra o array e popule um novo array auxiliar apenas com os alunos cujas notas são maiores ou iguais a media final
//3- Utilize a tecnica object destructuring para manipular as propriedades desejadas para cada aluno

const alunos = [
    {
        nome: 'Joao',
        nota:9,
        turma: '1B',

    },
    {
        nome:'Maria',
        nota:10,
        turma: '2C',
    },
    {
        nome:'Vamp',
        nota:10,
        turma: '3C',
    },
];


function alunosAprovados(arr, media){
    let aprovados = [];
    for(let i = 0; i<arr.length;i++){

      const  {nota,nome} = arr[i];
        if(nota >=media)
        aprovados.push(nome);

    }
    return aprovados;
}
console.log(alunosAprovados(alunos,6))