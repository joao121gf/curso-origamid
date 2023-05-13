// Mude a cor da tela para azul e depois para vermelho a cada 2s.
// function mudaCor() {
//   setInterval(() => {
//     document.body.classList.toggle('ativo')
//   }, 2000);
// }
// mudaCor()

// Crie um cronometro utilizando o setInterval. Deve ser possível
// iniciar, pausar e resetar (duplo clique no pausar).

const botaoInicio = document.querySelector("[data-inicio]");
const botaoPausa = document.querySelector("[data-pausa]");
const botaoParar = document.querySelector("[data-parar]");
const containerPai = document.querySelector('.container-button')


const div = document.createElement("div");
containerPai.appendChild(div)
numeroDiv = div.textContent = 0;

botaoInicio.addEventListener("click", ativaBotao);
function ativaBotao() {
  if (botaoPausa.className.includes("pausar")) {
    botaoPausa.classList.remove("pausar");
  }
  if (botaoParar.className.includes("parar")){
    botaoParar.classList.remove("parar");
  }
  const inicio = setInterval(() => {
    if (botaoPausa.className.includes("pausar")) {
      clearInterval(inicio);
    }
    if (botaoParar.className.includes("parar")) {
      div.textContent = 0;
      clearInterval(inicio);
    } else {
      div.textContent++;
    }
  }, 1000);
}

botaoPausa.addEventListener("click", pausaBotao);
function pausaBotao() {
  botaoPausa.classList.add("pausar");
}

botaoParar.addEventListener("click", paraCrono);
function paraCrono() {
  botaoParar.classList.add("parar");
}
