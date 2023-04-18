const listaAnimais = document.querySelector('.animais-lista');
console.log(listaAnimais)

// valor do container visivel
console.log(listaAnimais.clientHeight)

// altura total do elemento contando com o scroll dele
console.log(listaAnimais.scrollHeight)


// SERVE IGUAL PRA LARGURA



// Distancia do elemento em relacao ao topo da pagina 
const animaisTop = listaAnimais.offsetTop;
console.log(animaisTop)



// Distancia do canto esquerdo do elemento em relacao ao canto esquerdo da pagina toda


const primeiroh2 = document.querySelector('h2');

const distanciaEsquerdo = primeiroh2.offsetLeft

console.log(distanciaEsquerdo)

// DA AS CORDENADAS DO ELEMENTO, TOP, HEIGHT, DISTANCIA ETC...
const rect = primeiroh2.getBoundingClientRect();

console.log(rect)
console.log(rect.height)

if (rect.top < 0 ){
    console.log('Passou do elemento')
}

console.log(
    window.innerWidth,
    window.outerWidth,
    window.innerHeight,
    window.outerHeight,
    window.pageYOffset,
)


const small = window.matchMedia('(max-width: 600px)')

if(small.matches){
    console.log('USuario mobile')

}else{
    console.log('Usuário desktop')
}


