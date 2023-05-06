export default function dropdownMenu() {
  
  }



window.addEventListener("load", () => {
  const sobre = document.querySelector('[data-dropdown]');
  
  function ativaSobre(event){
    event.preventDefault()
    this.classList.toggle('ativaDropdown')
    console.log(this)
  }
  sobre.addEventListener('click', ativaSobre)
  sobre.addEventListener('touchstart', ativaSobre)

  function mouseForaSobre(event){
    this.classList.remove('ativaDropdown')
  }
  sobre.addEventListener('mouseleave', mouseForaSobre)
})