// Retorne o url da página atual utilizando o objeto window
const hrefPagina = window.location.href;
console.log(hrefPagina)



// Seleciona o primeiro elemento da página que
// possua a classe ativo
const elementoAtivo = document.querySelectorAll('.ativo')


// Retorne a linguagem do navegador
const linguagem = navigator.language
console.log(`A linguagem do navegador é ${linguagem}`)
// Retorne a largura da janela 
const larguraJanela = innerWidth;
console.log(`A largura da janela é de ${larguraJanela}`)