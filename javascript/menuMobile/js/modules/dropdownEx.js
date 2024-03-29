export default function dropdownMenuEx(element, event, callback) {
  window.addEventListener("load", () => {
    const contato = document.querySelectorAll("[data-contact]");

    function outClick(element, callback) {
      const html = document.documentElement;
      html.addEventListener("click", handleOut);
      function handleOut(event) {
        if (!element.contains(event.target)) {
          html.removeEventListener("click", handleOut);
          callback();
          const outraTab = document.querySelector("[data-dropdown]");
          outraTab.addEventListener("click", verifica);
          function verifica() {
            if (outraTab.classList.contains("ativaDropdown") && element.classList.contains('desceTab')) {
              outraTab.classList.remove("ativaDropdown");
            }
          }
        }
      }
    }

    contato.forEach((items) => {
      items.addEventListener("click", mostraTab);
    });

    function mostraTab(event, target) {
      event.preventDefault();
      this.classList.add("desceTab");
      outClick(this, () => {
        this.classList.remove("desceTab");
      });

      // se eu clicar fora remove o desce tab
    }
  });
}
