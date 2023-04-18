// function Carro(marcaCarro, precoCarro){
//   this.marca = marcaCarro;
//   this.preco = precoCarro;
// }

// const honda = new Carro('sedan', 2000);
// const fiat = new Carro('touro', 4000);


// function Carro2(marca, precoInicial){
//   const taxa = 1.2;
//   const precoFinal = precoInicial * taxa;

//   this.marca = marca;
//   this.preco = precoFinal;
// }


// const mazda = new Carro2('mazda', 6000)



// const Dom = {
//   seletor: 'li',
//   element(){
//     return document.querySelector(this.seletor);
    
//   },
//   ativar() {
//     this.element().classList.add('ativar')
//   }
// }

function Dom(seletor) {
  this.element = function(){
    return document.querySelector(seletor)
  }
  this.ativar = function(){
    this.element().classList.add('ativar')
  }
}


const li = new Dom('li')
const ul= new Dom('ul')