function areaQuadrado(num1){
    return num1 * num1;
}


area = areaQuadrado(5);
console.log(area);


function imc(peso, altura){
    let imc = peso / (altura **2);
    return imc;
}


console.log(imc(64, 1.80));


function terceiraIdade(idade){
    if (typeof idade !== 'number'){
        return  'Digite um número';
    } else if(idade <60){
        return false;
    } else{
        return true
    }
}
console.log(terceiraIdade('oi'))


function faltaVisitar(paisesVisitados){
    var totalPaises = 193;
    return `Faltam visitar ${totalPaises - paisesVisitados}`
}

console.log(faltaVisitar(3))


