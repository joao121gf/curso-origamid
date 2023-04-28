// Crie uma função que verifique
// corretamente o tipo de dado

function tipoDado(dado) {
  return Object.prototype.toString.call(dado);
}
console.log(tipoDado({}));

// Crie um objeto quadrado com
// a propriedade lados e torne
// ela imutável

const quadrado = {};
Object.defineProperties(quadrado, {
  lados: {
    value: 4,
  },
});
quadrado.lados = 43;
console.log(quadrado);

// Previna qualquer mudança
// no objeto abaixo
const configuracao = {
  width: 800,
  height: 600,
  background: "#333",
};

Object.freeze(configuracao);
configuracao.background = "blue";
console.log(configuracao.background);

// Liste o nome de todas
// as propriedades do
// protótipo de String e Array

const infoString = Object.getOwnPropertyDescriptors(String.prototype);

const infoArray = Object.getOwnPropertyDescriptors(Array.prototype);
console.log(infoString);
console.log(infoArray);
