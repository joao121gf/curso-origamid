function Pessoa(nome, idade){
  this.nome = nome;
  this.idade = idade;
}

Pessoa.prototype.andar = function(){
  return 'Pessoa andou';

}




const andre = new Pessoa('andre', 28)
console.log(Pessoa.prototype)
console.log(andre.prototype)