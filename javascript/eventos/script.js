const img = document.querySelector('img');

function callback(){
    console.log('Clicou')
}


img.addEventListener('click', callback)

const animaisLista = document.querySelector('.animais-lista');
console.log(animaisLista)

function callbackLista(event){
    console.log(event.currentTarget)
    console.log(event.target)

}

animaisLista.addEventListener('click', callbackLista);


const linkExterno = document.querySelector('a[href^="http"]')


function handleLinkExerno(evento){
    // Previne o padrao
    evento.preventDefault();

    console.log('Clicou')

}

linkExterno.addEventListener('click', handleLinkExerno);



const h1 = document.querySelector('h1');


function handleEvent(event){
    console.log(event.type, event)
}


// h1.addEventListener('click',  handleEvent)
// h1.addEventListener('mousemove', handleEvent)


// window.addEventListener('scroll', handleEvent)

// window.addEventListener('keydown', handleEvent)


function handleKeyboard(event){
    console.log(event.key)
}

window.addEventListener('keydown',handleKeyboard)