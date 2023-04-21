// Utilizando o foreach na array abaixo,
// some os valores de Taxa e os valores de Recebimento

const transacoes = [
    {
      descricao: 'Taxa do Pão',
      valor: 'R$ 39',
    },
    {
      descricao: 'Taxa do Mercado',
      valor: 'R$ 129',
    },
    {
      descricao: 'Recebimento de Cliente',
      valor: 'R$ 99',
    },
    {
      descricao: 'Taxa do Banco',
      valor: 'R$ 129',
    },
    {
      descricao: 'Recebimento de Cliente',
      valor: 'R$ 49',
    },
  ];

var somaTaxas = 0

transacoes.forEach((itens) =>{
    const limpar = itens.valor.split('R$ ')
    const numeroLimpo = Number(limpar[1])
    somaTaxas = somaTaxas + numeroLimpo
    return somaTaxas
})
console.log(`A soma dos valores sao ${somaTaxas}`)
  
  // Retorne uma array com a lista abaixo
  const transportes = 'Carro;Avião;Trem;Ônibus;Bicicleta';
  
const transClean = transportes.split(';')
console.log(transClean)



  // Substitua todos os span's por a's
  const html = `<ul>
                  <li><span>Sobre</span></li>
                  <li><span>Produtos</span></li>
                  <li><span>Contato</span></li>
                </ul>`;

    const htmlSpan = html.replace(/['span']+/g, 'a')
    console.log(htmlSpan)
  
  // Retorne o último caracter da frase
  const frase = 'Melhor do ano!';
    console.log(frase[frase.length - 1])
  
  // Retorne o total de taxas
   const transacoes2= ['Taxa do Banco', '   TAXA DO PÃO', '  taxa do mercado', 'depósito Bancário', 'TARIFA especial'];
  

let taxasTotal = 0
  transacoes2.forEach((itens) =>{
    const semEspaco = itens.trim()
    const limpo = semEspaco.toLocaleLowerCase()
    console.log(limpo)
    const taxas = limpo.slice(0,4)

    if(taxas === 'taxa')
        taxasTotal++
  })
console.log(taxasTotal)