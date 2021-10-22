// map
// Crie uma função getAdimns que recebe um map
//Crie um map e popule o com nomes de usuários e seus papeis no sistema
//Dentro do getAdimns utilize o loop for...of para retornar uma lista com os nomes dos usuários que são administradores
// set
// Dado o array [30,30,40,5,223,2049,3034,5] retorne outro array com valores únicos

function getAdimns(map){
    let admins = []
    for([key, value]of map){
        if(value === 'Adimin'){
            admins.push(key);
        }
    }
    return admins;

}
const usuarios = new Map()

usuarios.set('Jose', 'Admin');
usuarios.set('Joao', 'Admin');
usuarios.set('Maria', 'Admin');
usuarios.set('julia', 'Admin');

console.log(getAdimns(usuarios));

// set
// Dado o array [30,30,40,5,223,2049,3034,5] retorne outro array com valores únicos
const meuArray = [30,30,40,5,223,2049,3034,5];

function valoresUnicos(arr){
    const mySet = new Set(arr);
    return [...mySet]
}
console.log(valoresUnicos(meuArray))



