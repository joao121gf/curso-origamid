// Verifique a distância da primeira imagem
// em relação ao topo da página
const primeiraImg = document.querySelector('img');
console.log(`A distância da primeira imagem em relação ao topo da página são ${primeiraImg.offsetTop} px`)



// Retorne a soma da largura de todas as imagens
function somaImagens (){
  const todasImagens = document.querySelectorAll('img');
  let larguraTodasImagens = 0
  todasImagens.forEach((itens) => {
    
    larguraTodasImagens += itens.offsetWidth
  })
  console.log(larguraTodasImagens)
}

window.onload = function(){
  somaImagens();
}



// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)
const linksPagina = document.querySelectorAll('a');
const pxRecomendado = 48
linksPagina.forEach((itens) =>{
  if (itens.offsetHeight && itens.offsetWidth < pxRecomendado){
    console.log(`Não tem o tamanho recomendado, necessário 48px/48px. o container tem ${itens.offsetHeight}px / ${itens.offsetWidth}px`)
  } else{
    console.log(`tem o tamanho recomendado, necessário 48px/40px. o container tem ${itens.offsetHeight}px / ${itens.offsetWidth}px`)
  }

})



// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu
const menu = document.querySelector('.menu');
console.log(menu)
const smallWindow = window.matchMedia('(max-width: 600px)').matches

if (smallWindow === true){
  console.log('oi')
  menu.classList.add('menu-mobile')
}

