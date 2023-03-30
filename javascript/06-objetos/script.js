var pessoa = {
  nome: "João",
  idade: 23,
  altura: 1.79,
  peso: 60,
};

console.log(pessoa.idade);



var quadrado = {
    lados: 4,
    area: function(numLado){
        resArea  = numLado * numLado
        return resArea
    },
    perimetro: function(numPeri){
        return this.lados * numPeri
    }

}

var menu = {
    width: 800,
    height:50,
    backgroundColor: '#84E',

}
var bg = menu.backgroundColor;
console.log(menu.backgroundColor)
menu.backgroundColor = '#000';
console.log(menu.backgroundColor)


menu.color = 'blue'
menu.esconder = function(){
    console.log('escondi')
}

console.log(menu.esconder())


console.log(quadrado.area(5))
console.log(quadrado.perimetro(5))