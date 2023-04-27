// Retorne a soma total de caracteres dos
// parágrafos acima utilizando reduce

const p = document.querySelectorAll('p');
console.log(p)

const totalCaracteres = Array.prototype.reduce.call(p, (acumulador, item) => {
  return item.textContent.length + acumulador
}, 0)

console.log(totalCaracteres)

// Crie uma função que retorne novos elementos
// html, com os seguintes parâmetros
// tag, classe e conteudo.
function criarElemento(tag, classe, conteudo){
  const elemento = document.createElement(tag);
  classe ? elemento.classList.add(classe) : null;
  conteudo ? elemento.innerHTML = conteudo : null
  return elemento
}

console.log(criarElemento('div', 'ativo', 'seja bem vindo'))



// Crie uma nova função utilizando a anterior como base
// essa nova função deverá sempre criar h1 com a
// classe titulo. Porém o parâmetro conteudo continuará dinâmico

const tituloH1 = criarElemento.bind(null, 'h1', 'titulo')
console.log(tituloH1('Helloworld'))