// window.alert('Seja bem vindo')
const h1Selecionado = document.querySelector('h1')

h1Selecionado.innerHTML = "Seja bem vindo";
const h1Classes = h1Selecionado.classList;

function clicouH1() {
  console.log("Clicou em ", h1Selecionado.innerText);
}

h1Selecionado.addEventListener('click', clicouH1);
