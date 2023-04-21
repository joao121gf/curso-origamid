// Crie uma função construtora de Pessoas
// Deve conter nome, sobrenome e idade
// Crie um método no protótipo que retorne
// o nome completo da pessoa

function Pessoas(nome, sobrenome, idade){
  this.nome = nome
  this.sobrenome = sobrenome
  this.idade = idade
}

// Pessoas.prototype.nomeCompleto = function(){
//   Pessoas.
// }

Pessoas.prototype.nomeCompleto = function(){
  return `${this.nome} ${this.sobrenome}`
}

const pessoa1 = new Pessoas('Joao', 'Giovani', 22)





// Liste os métodos acessados por 
// dados criados com NodeList,
// HTMLCollection, Document
console.log(NodeList.prototype)
console.log(HTMLAllCollection.prototype)
console.log(Document.prototype)

// Liste os construtores dos dados abaixo
const li = document.querySelector('li');

li.constructor.name // li;
li.click.constructor.name // li.click;
li.innerText.constructor.name // li.innerText;
li.value.constructor.name // li.value;
li.hidden.constructor.name// li.hidden;
li.offsetLeft.constructor.name// li.offsetLeft;
li.click.constructor.name// li.click();

// // Qual o construtor do dado abaixo:
// li.hidden.constructor.name;
console.log(li.hidden.constructor.name)