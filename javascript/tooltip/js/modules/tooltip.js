export default function initTolltip() {
  
  }


const tolltips = document.querySelectorAll('[data-mapa]');
tolltips.forEach((itens)=> {
  itens.addEventListener('mouseover', mostraTooltip);
})


function mostraTooltip(event){

  const divToll = criarDivBox(this)

  

  onMouseMove.divToll = divToll
  this.addEventListener('mousemove', onMouseMove)

  onMouseLeave.element = this
  onMouseLeave.divToll = divToll
  this.addEventListener('mouseleave', onMouseLeave)



}

const onMouseLeave = {
  handleEvent(){
    this.divToll.remove()
    this.element.removeEventListener('mouseleave', onMouseLeave)
    this.element.removeEventListener('mousemove', onMouseMove)
  }
}

const onMouseMove = {
  handleEvent(event){
    this.divToll.style.top = event.pageY + 20 + 'px';
    this.divToll.style.left = event.pageX + 20 + 'px';
  }
}



function criarDivBox(element){
  const divToll = document.createElement('div');
  const texto = element.getAttribute('aria-label')
  divToll.classList.add('tolltip');
  divToll.innerText = texto
  document.body.appendChild(divToll)
  return divToll

}