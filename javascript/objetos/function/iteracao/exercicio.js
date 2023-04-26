// Selecione cada curso e retorne uma array
// com objetos contendo o título, descricao,
// aulas e horas de cada curso

window.addEventListener("load", function () {
  const cursos = document.querySelectorAll(".curso");
  const arrayCursos = Array.from(cursos);

  const objetosCurso = arrayCursos.map((curso) => {
    return {
      titulo: curso.querySelector("h1").innerHTML,
      descricao: curso.querySelector("p").innerHTML,
      aulas: curso.querySelector(".aulas").innerHTML,
      horas: curso.querySelector(".horas").innerHTML,
    };
  });
  console.log(objetosCurso);
});

// // Retorne uma lista com os
// // números maiores que 100
const numeros = [3, 44, 333, 23, 122, 322, 33];

const maiorQue100 = numeros.filter((item, index) => {
  if (item > 100) {
    return item;
  }
});
console.log(maiorQue100);

// // Verifique se Baixo faz parte
// // da lista de instrumentos e retorne true
const instrumentos = ["Guitarra", "Baixo", "Bateria", "Teclado"];

const temBaixo = instrumentos.some((item) => {
  return item === "Baixo";
});
console.log(temBaixo);

// // Retorne o valor total das compras
const compras = [
  {
    item: "Banana",
    preco: "R$ 4,99",
  },
  {
    item: "Ovo",
    preco: "R$ 2,99",
  },
  {
    item: "Carne",
    preco: "R$ 25,49",
  },
  {
    item: "Refrigerante",
    preco: "R$ 5,35",
  },
  {
    item: "Quejo",
    preco: "R$ 10,71",
  },
];


const valorTotal = compras.reduce((a, item, index) => {
  let preco = item.preco.split('R$ ')[1].replace(',', '.')
  let precoNumero = Number.parseFloat(preco)
  return precoNumero + a
}, 0)

console.log(valorTotal.toFixed(2))