const pessoa = new Object({
    nome: 'Joao',
    idade: 22
})


console.log(pessoa)


const carro = {
    marca: 'Honda', 
    ano: 2000,
    mostraMarca(){
        return this.marca + ' Acelerou ';
    },
    buzinar(){
        return this.marca + ' Buzinou'
    }
}


const ferrari = Object.create(carro)
ferrari.marca = 'Ferrari'

console.log(ferrari.mostraMarca())
console.log(carro.mostraMarca())
console.log(carro.buzinar())




const func = {
    buzinar(){
        return 'Buzinou'
    },
    acc(){
        return 'Acelerou'
    }

}

const carros = {
    marca: 'Honda',
    modelo: 'Sedan',

}

const moto = {
    marca: 'Titan',
    modelo: '160'
}

Object.assign(carros, func)
console.log(carros.acc())


const motors = {};

Object.defineProperties(motors, {
    modelo: {
        get(){
            return this._modelo;
        },
        set(model){
            this._modelo = model * 5
        }

    }
})

console.log(motors)