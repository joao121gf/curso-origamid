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


const sectionHtml = document.getElementsByClassName('grid-section')

const sectionNode = document.querySelectorAll('.grid-section')

primeiraUl.classList.add('grid-section')

console.log(sectionHtml)
console.log(sectionNode)


// A HTML COLECTION ATUALIZA SOZINHA
// A NODE LISTA É ESTATICA E NAO ATUALIZA SOZINHA

sectionNode.forEach(function(item, index){
    console.log(item)
})