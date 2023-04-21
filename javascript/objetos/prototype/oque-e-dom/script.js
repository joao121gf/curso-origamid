function Pessoa(nome, idade){
  this.nome = nome;
  this.idade = idade;
}

Pessoa.prototype.andar = function(){
  return 'Pessoa andou';

}




const andre = new Pessoa('andre', 28)
// console.log(Pessoa.prototype)
// console.log(andre.prototype)


const pais = 'Brasil';
const cidade = new String('rio');

pais.charAt(0) //B
cidade.charAt(0) // R primeiro caractere


const lista = document.querySelectorAll('li');
const listaArray = Array.from(lista)

const Carro = {
  marca: 'Ford',
  preco: 2000,
  andar(){
    return True
  }
}