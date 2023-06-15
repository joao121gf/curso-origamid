export default function animaNumeros() {
  window.addEventListener("load", () => {
    function animaNumeros() {
      const todosNumeros = document.querySelectorAll("[data-numero]");
      console.log(todosNumeros);
  
      todosNumeros.forEach((numeros) => {
        let texto = +numeros.innerText;
  
        let start = 0;
  
        const intervalo = setInterval(() => {
          const incremento = Math.floor(texto / 100);
  
          start = start + incremento;
          numeros.innerText = start;
          if (start > texto) {
            numeros.innerText = texto;
            clearInterval(intervalo);
          }
        }, 20);
      });
    }
  
    function handleMutation(mutation) {
      if((mutation[0].target.classList.contains("ativo"))){
        observer.disconnect();
        animaNumeros();
      };
    }
  
    const observerTarget = document.querySelector(".numeros");
    const observer = new MutationObserver(handleMutation);
  
    observer.observe(observerTarget, { attributes: true });
  });
  
}

