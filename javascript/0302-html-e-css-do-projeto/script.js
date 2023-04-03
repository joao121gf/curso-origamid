const animais = document.getElementById('animais')
// console.log(animais.innerText)

// o query selector retorna apenas o primeiro elemento e nao uma lista


const primeiraLi = document.querySelector('li')
console.log(primeiraLi)


const primeiraUl = document.querySelector('ul')
console.log(primeiraUl)


// links internos #
const linkInterno = document.querySelector('[href^="#')
console.log(linkInterno)




// query selector all seleciona todos os elementos com 'ul', 'li' 'div' , etc

const animaisImg = document.querySelectorAll('#animais img')
console.log(animaisImg[2])