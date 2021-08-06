// helpers
function esPar(numero) {return (numero % 2 === 0)}
function calcularMedia(array) {
  const sumaArray = array.reduce(
    function (acumulador = 0, nuevoElemento) {
      return acumulador + nuevoElemento
    }
  )
  const promedioArray = sumaArray/array.length
  return promedioArray
}
// calculadora de mediana
function medianaSalarios(array) {
  let mitad = parseInt(array.length /2)
  if (esPar(array.length)) {
    let personaMitad1 = array[mitad -1] 
    let personaMitad2 = array[mitad]
    let mediana = calcularMedia([personaMitad1, personaMitad2])
    return mediana
  } else {
    let personaMitad = array[mitad]
    return personaMitad
  }
}
// mediana general
let salariosMex = mexico.map(
  function (persona) {
    return persona.salary
  }
)
let salariosMexOrdenados = salariosMex.sort(
  function (salarioA, salarioB) {
    return salarioA - salarioB
  }
)
let medianaGeneralMex = medianaSalarios(salariosMexOrdenados)

// mediana del top 10%
let spliceStart = (salariosMexOrdenados.length * 90) / 100
let spliceCount = salariosMexOrdenados.length - spliceStart
let salariosMexTop10 = salariosMexOrdenados.splice(spliceStart, spliceCount)


let medianaTop10Mex = medianaSalarios(salariosMexTop10)







console.log({
  medianaGeneralMex,
  medianaTop10Mex,
})
