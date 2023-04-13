// Duplique o menu e adicione ele em copy

const menu = document.querySelector('.menu')

const copy = document.querySelector('.copy')

menu.cloneNode(true)
copy.appendChild(menu)



// Selecione o primeiro DT da dl de Faq
const primeiraDl = document.querySelector('dl')
const primeiroDt = primeiraDl.children[0]
console.log(primeiroDt)


// Selecione o DD referente ao primeiro DT

const primeiroDD = primeiroDt.nextElementSibling

console.log(primeiroDD)


// Substitua o conteúdo html de .faq pelo de .animais
const animais = document.querySelector('.animais')
const faq = document.querySelector('.faq')


faq.innerHTML = animais.innerHTML