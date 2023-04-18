// Crie uma função para verificar se um valor é Truthy
function verdade(valor) {
  if (typeof valor !== "number") {
    return false;
  } else {
    return true;
  }
}
console.log(verdade("oi"));

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado
function perimetro(lado1) {
  let per = lado1 * 4;
  return console.log(per);
}
perimetro(3);

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome
function nomeCompleto(nome, sobrenome) {
  return nome + " " + sobrenome;
}
console.log(nomeCompleto("joao", "Giovani"));

// Crie uma função que verifica se um número é par
function parImpar(num1, num2) {
  if (num1 % 2 == 0) {
    // return 'Par';
    console.log("Par");
  } else {
    // return 'Impar'
    console.log("Impar");
  }
}
parImpar(2);

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)

function tipo(dado) {
  console.log(typeof dado);
}

tipo("oi");

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.

// addEventListener("scroll", function () {
//   console.log("Joao Giovani Freire");
// });

// Corrija o erro abaixo
var totalPaises = 193;

function precisoVisitar(paisesVisitados) {
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
  
}
function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
precisoVisitar(20);
jaVisitei(20);
