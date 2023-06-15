export default function dateObject() {
  window.addEventListener("load", () => {
    const dataHoje = new Date();
    const dataNatal = new Date('December 26 2023 00:01')


    function diasParaNatal(data){
      return data / (24 * 60 * 60 * 1000)

    }


   const diaAgora = diasParaNatal(dataHoje.getTime())
   const diasFuturo = diasParaNatal(dataNatal.getTime())
   const res = Math.floor(diasFuturo -  diaAgora)
    console.log(`Faltam ${res} dias para o natal `)


    console.log(dataNatal)
    

    
  });
}
