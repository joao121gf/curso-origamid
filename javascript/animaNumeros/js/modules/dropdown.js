import outsideClick from "./outsideClick.js";

export default function dropdownMenu() {
  window.addEventListener("load", () => {
    const sobre2 = document.querySelectorAll("[data-dropdown]");
    sobre2.forEach((menu) => {
      ["touchstart", "click"].forEach((userEvent) => {
        menu.addEventListener(userEvent, ativaSobre);
      });
    });

    function ativaSobre(event) {
      event.preventDefault();
      this.classList.add("ativaDropdown");
      outsideClick(this, ["touchstart", "click"], () => {
        this.classList.remove("ativaDropdown");
      });
    }
  });
}
