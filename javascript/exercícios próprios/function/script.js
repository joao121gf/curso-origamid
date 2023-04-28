// Escreva uma função que calcule a média de um array de objetos contendo notas de alunos:

const notas = [
  { valor: 7.5 },
  { valor: 8 },
  { valor: 9 },
  { valor: 6 },
  { valor: 2 },
];

// console.log(notas[2].valor)

function media() {
  const mediaNotas = this.reduce((soma, nota, index) => {
    if (index === this.length - 1) {
      return (soma + nota.valor) / this.length;
    } else {
      return soma + nota.valor;
    }
  }, 0);
  return mediaNotas
}

const notasPrimeiroBimestre = [
    { valor: 5.6},
    { valor: 2.6},
    { valor: 6.5},
    { valor: 2},
]

const mediaNotas = media.call(notasPrimeiroBimestre)
console.log(mediaNotas)



// Crie uma função que calcule a soma de dois números e use .call() para executá-la com diferentes valores.


function soma(valor1, valor2){
    return valor1 + valor2
}

const a = 20
const b = 30


console.log(soma.call(null, a, b))


// Crie uma função que retorne o maior valor de um array e use .apply() para executá-la com um array de valores.

function maiorValor(arry){
    return Math.max.apply(null, arry)
}

maiorValor([10, 20, 30, 40])
console.log(maiorValor([10, 20, 30, 120, 40, 60]))


// Crie uma função que imprima o nome completo de uma pessoa usando .bind() para fixar um valor para o primeiro parâmetro.

function imprimeNome(nome, sobrenome){
    return nome + ' ' + sobrenome 
}

const nomeFixo = imprimeNome.bind(null, 'João')
console.log(nomeFixo('Giovani'))


// Crie uma função que some três números e use .call() para executá-la com um objeto contendo os valores.

function soma3(nume1, nume2, nume3){
    return nume1 + nume2 + nume3
}

const numeros = {
    num1: 15,
    num2: 20,
    num3: 30,
  }


const novoSoma3 = soma3.call(null, numeros.num1, numeros.num2, numeros.num3, )
console.log(soma3(2, 4, 6))
console.log(novoSoma3)



// Crie uma função que receba um objeto como parâmetro e use .apply() para adicionar uma propriedade a esse objeto.
function objParametro(obj){
    Array.prototype.push.apply(obj, )
}


const pessoas = {
    aluno1: 'João',
    aluno2: 'Maria',
    aluno3: 'Pedro',
    aluno4: 'Lucas',
    aluno5: 'Ana',
    aluno6: 'Mariana',
    aluno7: 'Felipe',
    aluno8: 'Julia',
    aluno9: 'Gustavo',
    aluno10: 'Bianca'
  };
objParametro.apply(null, [pessoas])
console.log(pessoas.aluno1)
console.log(pessoas)



const jogos = {
    nome: 'GTA'
}

const carro = {
    nome: 'Toyota',

    mostraNome(){
        console.log(this.nome)
    }
}


const oi = carro.mostraNome.apply(jogos)

console.log(oi)