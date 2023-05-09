
export default function dropdownMenuEx(element, event, callback) {
  window.addEventListener("load", () => {
    const contato = document.querySelectorAll('[data-contact]');


    function outClick(callback){
      const html = document.documentElement;
      html.addEventListener('click', handleOut);
      function handleOut(event){
        callback();
      }
    }
  


    contato.forEach((items) =>{
      items.addEventListener('click', mostraTab);
    })
    function mostraTab(event, target){
      event.preventDefault();
      this.classList.add('desceTab')
      // console.log(event.target)
      outClick(()=> {
        console.log(element)
      })

      // se eu clicar fora remove o desce tab
    }
  });
}
