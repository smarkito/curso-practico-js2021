// función que convierte un cadena de caracteres en un array con números
function convertTextToArray (string) {
  let stringArray = string.split(',')
  let numericArray = stringArray.map(
    function (element) {
      return parseInt(element)
    }
  )
  return numericArray
}
// función que calcula el promedio de un array de números
function calculateMean(numbersArray) {
  const sumArray = numbersArray.reduce(
    function (acumulator = 0, newElement) {
      return acumulator + newElement
    }
  )
  const arrayMean= sumArray/numbersArray.length
  return arrayMean
}
// función que calcula la mediana de un array de números
function calculateMedian(array) {
  array.sort(
    function (a, b) {
      return a - b
    }
  )
  let halfArray = parseInt(array.length /2)
  function calculateParity(lenghtArray) {
    if (lenghtArray % 2 === 0) {
      return true
    } else {
      return false
    }
  }
  let median
  if (calculateParity(array.length)) {
    let item1 = array[halfArray - 1]
    let item2 = array[halfArray]
    let meanItems = calculateMean([item1, item2])
    median = meanItems
  } else {
    median = array[halfArray]
  }
  return median
}
// función que calcula la moda de un array de numeros
function calculateMode(myArray) {
  let myObject = {}
  myArray.map(
    function (number) {
      if (myObject[number]) {
        myObject[number] += 1
      } else {
        myObject[number] = 1
      }
    }
  )
  let orderedObject = Object.entries(myObject).sort (
    function (elementA, elementB) {
      return elementA[1] - elementB[1]
    }
  )
  let mode = orderedObject[orderedObject.length -1]
  let iterator = mode.values()
  return iterator.next().value
}

// función que invoca dos funciones dando como resultado el promedio 
function executeMean(string) {
  const array = convertTextToArray(string)
  const mean = calculateMean(array)
  return mean 
}
// función que invoca dos funciones dando como resultado la mediana
function executeMedian(string) {
  let array = convertTextToArray(string)
  let median =  calculateMedian(array)
  return median
}
// función que invoca dos funciones dando como resultado la moda
function executeMode(string) {
  let array = convertTextToArray(string)
  let mode = calculateMode(array)
  return mode
}
// función que realiza la interacción de HTML con Javascript
// media
function meanCalculator() {
  let inputText = document.getElementById("input_text")
  let textValue = inputText.value
  const meanCalculated = executeMean(textValue)
  let resultMean = document.getElementById("resultMean")
  resultMean.innerText = `La media es ${meanCalculated.toFixed(2)}`
}
// mediana
function medianCalculator() {
  let inputText = document.getElementById("input_text")
  let textValue = inputText.value
  let meadianCalculated = executeMedian(textValue)
  let resultMedian = document.getElementById("resultMedian")
  resultMedian.innerText = `La mediana es ${meadianCalculated.toFixed(2)}`
}
// moda
function modeCalculator() {
  let inputText = document.getElementById("input_text")
  let textValue = inputText.value
  let modeCalculated = executeMode(textValue)
  let resultMode = document.getElementById("resultMode")
  resultMode.innerText = `La moda es ${modeCalculated}`
}