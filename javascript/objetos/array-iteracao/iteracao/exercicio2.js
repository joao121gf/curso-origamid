// Crie um array de números e use o método map para criar um novo array com o dobro de cada número.

const numeros = [0, 2, 4, 5, 6, 7, 10];
const dobroNumeros = numeros.map((itens) => {
    return itens * 2;
})

console.log(dobroNumeros);



// Crie um array de objetos com informações de produtos, como nome, preço e quantidade em estoque. Use o método filter para criar um novo array com produtos que estejam em estoque (ou seja, quantidade maior que 0).


const produtos = [
    {
      nome: "Banana",
      preco: "R$ 4,99",
      quantidade: 20,
    },
    {
      nome: "Ovo",
      preco: "R$ 2,99",
      quantidade: 10,
    },
    {
      nome: "Carne",
      preco: "R$ 25,49",
      quantidade: 3,

    },
    {
      nome: "Refrigerante",
      preco: "R$ 5,35",
      quantidade: 5,

    },
    {
      nome: "Queijo",
      preco: "R$ 10,71",
      quantidade: 0,

    },
  ];


const temEstoque = produtos.filter((item) => {
    if (item.quantidade > 0){
        return item
    }
})

console.log(temEstoque)



// Crie um array de números e use o método reduce para calcular a soma de todos os números.

const numeros2 = [0, 2, 4, 5, 6, 7, 10];
const somaDosNumeros = numeros2.reduce((a, item) => {
    return item + a
}, 0)
console.log(somaDosNumeros)

// Crie um array de objetos com informações de produtos, como nome, preço e quantidade em estoque. Use o método reduce para calcular o valor total do estoque (ou seja, preço multiplicado pela quantidade, somado para cada produto).


const valorTotalEstoque = produtos.reduce((a, item) => {
    let limpaPreco = item.preco.split('R$ ')[1].replace(',', '.');
    let precoLimpo = Number.parseFloat(limpaPreco)
    // console.log(item.quantidade)
    let estoqueItem =  precoLimpo * item.quantidade
    let totalEstoque = estoqueItem
    return a + totalEstoque
}, 0)

console.log(`O valor total do estoque foi de R$ ${valorTotalEstoque.toFixed(2)}`)


// Crie um array de palavras e use o método reduce para criar uma única string com todas as palavras concatenadas, separadas por espaço.



const palavras = ['Pedro', 'Sandra', 'Matheus', 'Isaac', 'Washngton', 'Mathias', 'Evandro', 'Bruno']


const concatenaPalavras = palavras.reduce((a, i) => {
    return a + (i + ' ');
}, [])
console.log(concatenaPalavras);


// Crie um array de objetos com informações de livros, como título, autor e número de páginas. Use o método filter para criar um novo array com livros que tenham mais de 300 páginas.

const livros = [
    {
      titulo: "O Hobbit",
      autor: "J.R.R. Tolkien",
      paginas: 320
    },
    {
      titulo: "A Menina que Roubava Livros",
      autor: "Markus Zusak",
      paginas: 480
    },
    {
      titulo: "O Pequeno Príncipe",
      autor: "Antoine de Saint-Exupéry",
      paginas: 96
    },
    {
      titulo: "A Culpa é das Estrelas",
      autor: "John Green",
      paginas: 288
    }
  ];


const maisDe300 = livros.filter((item) => {
    return item.paginas > 300
})

console.log(maisDe300)


// Crie um array de números e use o método filter para criar um novo array com números pares.

const numerics = [0, 2, 4, 5, 6, 7, 10];

const parOuImpar = numerics.filter((item) => {
    return item % 2 == 0; 
})
console.log(parOuImpar)


// Crie um array de palavras e use o método map para criar um novo array com as palavras em maiúsculas.

const nomes = ['Pedro', 'Sandra', 'Matheus', 'Isaac', 'Washngton', 'Mathias', 'Evandro', 'Bruno']

const uperNomes = nomes.map((item) => {
    return item.toUpperCase();
})

console.log(uperNomes)

// Crie um array de objetos com informações de produtos, como nome, preço e quantidade em estoque. Use o método map para criar um novo array com os preços em dólar (ou seja, preço multiplicado pelo valor atual do dólar).

const estoque = [
    {
      nome: "Camiseta",
      preco: 39.99,
      quantidade: 10
    },
    {
      nome: "Calça Jeans",
      preco: 89.99,
      quantidade: 5
    },
    {
      nome: "Tênis",
      preco: 129.99,
      quantidade: 3
    },
    {
      nome: "Boné",
      preco: 19.99,
      quantidade: 20
    }
  ];

const estoqueParaDolar = estoque.map((item) => {
    return (item.preco * 5.05).toLocaleString('en-US', {style:'currency', currency:'USD'})
})
console.log(estoqueParaDolar)

// Crie um array de palavras e use o método filter e map para criar um novo array com as palavras que começam com a letra "a" em maiúsculas.

const animais = ["gato", "cachorro", "aguia", "elefante", "papagaio", "tartaruga", "girafa", "abelha", "andorinha", ];

const animaisComA = animais.filter((item) => {
    console.log(item)
    if (item[0] === 'a'){
        return item.toUpperCase()
    }
}).map((itens) => {
    return itens.toUpperCase()
})

console.log(animaisComA)