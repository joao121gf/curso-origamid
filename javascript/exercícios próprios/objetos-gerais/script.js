// Criar um objeto chamado "carro" com as propriedades "marca", "modelo" e "ano". Em seguida, crie uma função chamada "exibirCarro" que exibe as informações do carro no console.



const carro = {
  carro1: {
    marca: 'Toyota',
    modelo : 'Corolla',
    ano: 2020
  },
  carro2: {
    marca: 'Honda', 
    modelo: 'Civic',
    ano: 2019
  },
  carro3: {
    marca: 'Chevrolet',
    modelo: 'Onix',
    ano: 2021
  }


}

let arrayCarro = Object.values(carro)
arrayCarro.forEach((itens) => {
  console.log(`Marca: ${itens.marca} // Modelo ${itens.modelo} // ano ${itens.ano}`)
})


// Criar uma função chamada "calcularMedia" que recebe um objeto como parâmetro. O objeto deve ter as propriedades "notas" (um array com as notas do aluno) e "pesos" (um array com os pesos de cada nota). A função deve calcular a média ponderada das notas e retornar o resultado.


// media_ponderada = (nota1 * peso1 + nota2 * peso2 + nota3 * peso3) / (peso1 + peso2 + peso3)



const grades = {
  aluno1: {
    notas: [4, 5, 6],
    pesos: [1, 1, 2]
  },
  aluno2: {
    notas: [2, 3, 6],
    pesos: [1, 1, 2]
  },
  aluno3: {
    notas: [6, 8, 6],
    pesos: [1, 1, 2]
  },
  aluno4: {
    notas: [9, 7, 8],
    pesos: [1, 1, 2]
  },
  aluno5: {
    notas: [7, 5, 4],
    pesos: [1, 1, 2]
  },

}

let arrayGrades = Object.values(grades)

arrayGrades.forEach((itens, index) => {
  let primeiraNota = itens.notas[0]
  let segundaNota = itens.notas[1]
  let terceiraNota = itens.notas[2]

  let primeiroPeso = itens.pesos[0]
  let segundoPeso = itens.pesos[1]
  let terceiroPeso = itens.pesos[2]
  const mediaPonderada = ((primeiraNota * primeiroPeso) + (segundaNota * segundoPeso) + (terceiraNota * terceiroPeso)) / 4

  const nomeAluno = Object.keys(grades)[index]
  console.log(`A média ponderada do ${nomeAluno} foi ${mediaPonderada}`)

})


