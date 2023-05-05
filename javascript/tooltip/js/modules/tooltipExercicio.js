export default function initTolltipExercicio() {}



window.addEventListener("load", () => {
  const raposa = document.querySelector('[data-animais="raposa"]');
  const esquilo = document.querySelector('[data-animais="esquilo"]');


  raposa.addEventListener('mouseover', mouseOnAnimais)
  esquilo.addEventListener('mouseover', mouseOnAnimais)


  function mouseOnAnimais(event){
    const divAnimais = criaAnimaisDiv(this)
  
    this.addEventListener('mousemove', mouseMove)
    mouseMove.divAnimais = divAnimais



    mouseLeaveAnimais.divAnimais = divAnimais
    this.addEventListener('mouseleave', mouseLeaveAnimais)
  }

  const mouseLeaveAnimais = {
    handleEvent(){
      this.divAnimais.remove()
    }
  }

  const mouseMove = {
    handleEvent(event){
      this.divAnimais.style.top = event.pageY + 10 + 'px'
      this.divAnimais.style.left = event.pageX + 10 + 'px'
    }
  }
  

  function criaAnimaisDiv(element){
    const divAnimais = document.createElement('div')
    const text = element.getAttribute('aria-label')
    divAnimais.classList.add('caixaRaposa')
    divAnimais.innerText = text
    document.body.appendChild(divAnimais)
    return divAnimais
  }
  
});
