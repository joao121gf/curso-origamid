// Mostre no console cada parágrado do site
const paragrafos = document.querySelectorAll('p')

const paragrafos2 = document.getElementsByClassName('p')
paragrafos.forEach((items => console.log(items)))


// Mostre o texto dos parágrafos no console
paragrafos.forEach(item => console.log(item.innerText))


// Como corrigir os erros abaixo:
 const imgs = document.querySelectorAll('img');

 imgs.forEach((item, index) => {
   console.log(item, index);
 });

 let i = 0;
 imgs.forEach(() => {
   console.log(i++);
 });

 imgs.forEach(() => i++);

