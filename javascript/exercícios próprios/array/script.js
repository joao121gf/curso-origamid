// Arrays:
// a) Crie uma função que recebe um array como parâmetro e retorna o maior número presente no array.

// b) Crie uma função que recebe um array como parâmetro e retorna a soma de todos os números presentes no array.

// c) Crie uma função que recebe dois arrays como parâmetros e retorna um novo array que contém a concatenação dos dois arrays.

// d) Crie uma função que recebe um array como parâmetro e retorna um novo array com os valores duplicados removidos.

// a
function receiveArray(arrayParameter){
    return Math.max(...arrayParameter)
}
let arrayParameter = [1, 2, 3, 34, 6]
let maiorValor = receiveArray(arrayParameter)
console.log(`The largest value in the array is ${maiorValor}`)

// b
let sums = 0
function somaArray(values){
    values.forEach((numbers) =>{
        sums += numbers
    })
    return sums
}
const numbersArray = [5, 2, 6, 10, 2, 4, 10]
let itensArray =  somaArray(numbersArray)
console.log(`The sum of values in array is ${itensArray}`)


// c

function concatArray(array1, array2){
    const array3 = array1.concat(array2)
    console.log(array3)
}

let array1 = ['This array', 'Togheter with']
let array2 = ['This :)']
concatArray(array1, array2)


// d
function cleanArrays(value){
    return value.filter((item, index) =>
        value.indexOf(item) === index
    )
}
let notes = [1, 5, 6, 2, 5, 23, 5, 4, 2]
cleanArrays(notes)
console.log(`A array sem propriedades repetidas fica ${cleanArrays(notes)}`)


