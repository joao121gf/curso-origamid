import outsideClick from "./outsideClick.js";

export default function initMenuMobile() {}
window.addEventListener("load", () => {
  const menuButton = document.querySelector('[data-menu="button"]');
  const menuLista = document.querySelector('[data-menu="lista"]');

  function openMenu() {
    menuButton.classList.add("active");
    menuLista.classList.add("active");
    outsideClick(menuLista, ['click', 'touchstart'], ()=>{
      menuButton.classList.remove("active");
      menuLista.classList.remove("active");
    })
  }

  menuButton.addEventListener("click", openMenu);
  console.log(menuButton)
});
