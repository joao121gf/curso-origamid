
export default function setTimeoutEx(){
  function chama(texto){
    console.log(texto)
  }
  setTimeout(chama, 2000, 'Exercendo a função')


  setTimeout(() => {
    console.log('Testando')
  }, 1000)

  // for (let n = 0; n < 20; n++){
  //   setTimeout(() => {
  //     console.log(n)
  //   }, 1000 * n)
  // }

  let i = 0
  const contarAte10 = setInterval(() => {
    console.log(i++)
    if ( i > 10){
      clearInterval(contarAte10)
    }
  }, 100)

}
