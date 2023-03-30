// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome

var dados = {
  nome: "Joao",
  sobrenome: "Freire",
  peso: 64,
  idade: 23,
  bandaFavorita: "Alice in chains",
  completeName: function (name, sobre) {
    name = this.nome;
    sobre = this.sobrenome;
    return (nomeCompleto = `${name + " " + sobre}`);
  },
};
// Crie um método no objeto anterior, que mostre o seu nome completo

console.log(dados.completeName());

// Modifique o valor da propriedade preco para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: "Audi",
};

carro.preco = 3000;

console.log(carro.preco);

// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem

var cao = {
  raca: "Labrador",
  cor: "Preta",
  idade: 10,
  lateAoVerHomem: true,
};
if (cao.lateAoVerHomem == true) {
  var lateOuNao = "Late";
} else {
  var lateOuNao = "Não late";
}

console.log(
  `O cachorro é da raça ${cao.raca} tem sua cor ${cao.cor}, ele tem ${cao.idade} anos  e ele ${lateOuNao} ao ver um homem. `
);
