// Retorne no console todas as imagens do site
const todasImagens = document.querySelectorAll('img')
console.log(todasImagens)


// Retorne no console apenas as imagens que começaram com a palavra imagem

const imagensAnimais = document.querySelectorAll('img[src^="img/imagem"]')
console.log(imagensAnimais)

// Selecione todos os links internos (onde o href começa com #)
const linksInternos = document.querySelectorAll('[href^="#')
console.log(linksInternos)

// Selecione o primeiro h2 dentro de .animais-descricao
const primeiroH2 = document.querySelector('.animais-descricao h2')
console.log(primeiroH2)

// Selecione o último p do site
const todosElementos = document.querySelectorAll('p')
const tamanhoP = todosElementos.length
const ultimoP = todosElementos[tamanhoP - 1]


console.log(todosElementos)
console.log(ultimoP)
