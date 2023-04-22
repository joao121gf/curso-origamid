const instrumentos = ['Guitarra', 'Baixo', 'Violão'];
const precos = [49, 99, 69, 89];

const dados = [new String('Tipo 1'), ['Carro', 'Portas', {cor: 'Azul', preco: 2000}], function andar(nome) { console.log(nome) }];

const carros = new Array('ford', 'fiat', 'honda')
carros[2] = 'Ferrari'
console.log(carros)


const obj = {
    0: 'André',
    1: 'Rafael',
    2: 'Tteste',
    length: 3
}


const objArray = Array.from(obj)
const li = document.querySelectorAll('li');
const arrayLi = Array.from(li)

console.log(arrayLi[1])


const instrumentos2 = ['Guitarra', 'Baixo', 'Violão'];
instrumentos2.sort();
instrumentos2; // ['Baixo', 'Guitarra', Violão]

const idades = [32,21,33,43,1,12,8];
idades.sort();
idades; // [1, 12, 21, 32, 33, 43, 8]


const carros2 = ['ford', 'fiat', 'vw', 'honda']
carros2.splice(2,1 ,'RENOT')
console.log(carros2)


let htmlString = '<h2> titulo principal </h2>';
htmlString = htmlString.split('h2')
htmlString = htmlString.join('section')


console.log(htmlString)