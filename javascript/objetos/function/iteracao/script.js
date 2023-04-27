function sum(num1, num2){
    return num1 + num2;
}

console.log(sum.length) // quantidade de parametros dentro da func 
console.log(sum.name)  //nome em string


function listaCarros(){
    console.log(this.marca +' ' + this.ano)
}

listaCarros.call({marca: 'Ford', ano: 2018})

const carros = ['Ford', 'Fiat', 'VW'];
const frutas = ['Banana', 'Uva', 'Pera']

carros.forEach.call(carros, (item) => {
    console.log(item)
})

function Dom(element){
    this.element = document.querySelector(element);
}
Dom.prototype.ativo = function(classe){
    this.element.classList.add(classe)
}

const li = {
    element: document.querySelector('li')
}
const ul = new Dom('ul');
ul.ativo.call(li, 'asd')


const $ = document.querySelectorAll.bind(document)


const carro = {
    carro: 'Ford',
    ano: 2018,
    acelerar: function(aceleracao, tempo){
        return `${this.carro} Acelerou ${aceleracao} em ${tempo}` 
    }
}

const honda = {
    carro: 'Honda',

}
const acelerarHonda = carro.acelerar.bind(honda, 100, 30);

console.log(acelerarHonda())
console.log(carro.acelerar(20, 30))