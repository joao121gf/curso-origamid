const carros = ['fiat', 'chevrolett', 'fusca', 'camaro']
// console.log(carros)

// carros.forEach((item, index, array) =>{
//     array[index] = 'pedro2k'
//     console.log(array)
// })
// console.log(carros)


// const li = document.querySelectorAll('li')
// li.forEach((i) => i.classList.add('ativo'))


// const novaArray = carros.map((item, index, array) =>{
    
//     console.log(item.toUpperCase(), index, array)
// })

// console.log(novaArray)

// const numeros = [2, 4, 5, 6, 7]


// const numerosMult = numeros.map((itens, index) =>{
//     return itens * itens
// })

// console.log(numerosMult)



// const aulas = [
//     {
//       nome: 'HTML 1',
//       min: 10
//     },
//     {
//       nome: 'HTML 2',
//       min: 10
//     },
//     {
//       nome: 'CSS 1',
//       min: 20
//     },
//     {
//       nome: 'JS 1',
//       min: 20
//     },
//   ]

// // total tempo das aulas
// const totalHoras = aulas.map((it) => it.min += it.min)

// function nomeAulas(aula){
//     return aula.nome
// }

// const arrayNomeAulas = aulas.map(nomeAulas)
// console.log(totalHoras)



const notasAlunos = [5, 2, 4, 5, 92 ,10]

// const somaNotas = notasAlunos.reduce((sum, items) => {
//     return sum + items
// }, 0)
// console.log(somaNotas)


// const somaNotas  = notasAlunos.reduce((s, i) => s + i)
// console.log(somaNotas)


const maiorNumero = notasAlunos.reduce((a, i) => {
    return a > i ? a : i
})

console.log(maiorNumero)


const aulas = [
    {
      nome: 'HTML 1',
      min: 15
    },
    {
      nome: 'HTML 2',
      min: 10
    },
    {
      nome: 'CSS 1',
      min: 20
    },
    {
      nome: 'JS 1',
      min: 25
    },
  ]

// const nomeAulas = aulas.reduce((acum, itens, index) => {
//     acum[index] = itens.nome
//     return acum
// }, {})

// console.log(nomeAulas[2])

const maior15 = aulas.filter((items) => {
    return items.min > 15
})

console.log(maior15)