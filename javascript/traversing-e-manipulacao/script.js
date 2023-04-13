// const primeiroH1 = document.querySelector('h1');
// const animaisLista = document.querySelector('.animais-descricao')

// primeiroH1.innerHTML = 'bom dia'
// console.log(animaisLista.innerHTML)


// primeiroH1.innerHTML = '<p> novo título </p>'



const lista = document.querySelector('.animais-lista');

console.log(lista.parentElement.parentElement)


console.log(lista.nextElementSibling)
console.log(lista.children)
console.log(lista.querySelector('li:last-child'))

console.log(lista.childNodes)

const animais = document.querySelector('.animais')
const contato = document.querySelector('.contato');

const titulo = contato.querySelector('.titulo')
 

contato.removeChild(titulo)

// contato.insertBefore(animais ,titulo);


const novoh1 = document.createElement('h1')
novoh1.innerText = 'novo titulo'
novoh1.classList.add('titulo')



console.log(novoh1)
