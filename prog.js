const usuario = prompt('Quantos números você deseja calcular ?')

for(let i = 0; i < usuario; i++) {
 usuario[i] = prompt(`Digite seus números ${i + 1}`);

}

let soma = (n1, n2) => n1 + n2
document.write(`somatório = ${soma}`)

let soma_total = soma.length

let MEDIA = soma / soma_total.length 
document.write(`A média foi de ${MEDIA.toFixed}`)

let num_usu = numeros 
document.write(`A potência de ${num_usu} é:  ${num_usu ** 2}. `)

let raizquad = Math.sqrt(numeros)
   document.write(`A raiz quadrada de ${numeros} é: ${raizquad}`)

let raizcubica = Math.cbrt(numeros)
  document.write(`A raiz cúbica de ${numeros} é: ${raizcubica}`)
