export default function initModal() {
    const abrirModal = document.querySelector('[data-modal="abrir"]');
    const fecharModal = document.querySelector('[data-modal="fechar"]');
    const containerModal = document.querySelector('[data-modal="container"]');
    
    if (abrirModal && fecharModal && containerModal) {
      function funcAbrirModal(event) {
        event.preventDefault();
        containerModal.classList.add("ativo");
      }
    
      function funcFecharModal(event) {
        event.preventDefault();
        containerModal.classList.remove("ativo");
      }
    
      function cliqueForaModal(event) {
        if (event.target === this) {
          funcFecharModal(event);
        }
      }
    
      abrirModal.addEventListener("click", funcAbrirModal);
      fecharModal.addEventListener("click", funcFecharModal);
      containerModal.addEventListener("click", cliqueForaModal);
    }
}


