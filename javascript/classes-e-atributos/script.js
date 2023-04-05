const menu = document.querySelector('.menu');
menu.classList.add('menuMobile')
menu.classList.remove('menuMobile')
menu.classList.toggle('azul')
menu.classList.contains('azul')
if (menu.classList.contains('azul')){
    menu.classList.add('possui-azul')
}else {
    menu.classList.add('nao-possui-azul')
}

console.log(menu.classList);


const animais = document.querySelector('.animais');

console.log(animais.attributes['data-texto'])

const img = document.querySelector('img');
img.setAttribute('alt', 'é uma raposa')

const possuiAlt = img.hasAttribute('alt');
console.log(possuiAlt)
console.log(img.getAttribute('src'))

const carro = {
    portas: 4,
    andar: function(km){
        console.log(`andou ${km}`)
    }
}