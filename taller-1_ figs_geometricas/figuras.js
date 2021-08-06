//Código del cuadrado
function perimetroCuadrado(lado) {
  return lado * 4;
}
function areaCuadrado (lado) {
  return lado * lado;
}

// Código del triángulo equilátero
// function perimetroTriangulo(lado1, lado2, base) {
//   return lado1 + lado2 + base;
// }
// function areaTriangulo (base, altura) {
//   return (base * altura) / 2;
// } 


// Código del triángulo isósceles
// Funcion para determinar la altura de un triángulo isósceles
function alturaIsoTriang(a,b,base) {
  if (a!=b) {
    console.error("Los lados a y b no son iguales");
    alert("Los lados a y b deben ser iguales. Intenta de nuevo");
  } else {
    return Math.sqrt((a*a)-((base*base)/4));
  }
}
function areaIsoTriang(b, h) {
  return (b * h)/2;
}

// Código del circulo
const PI = Math.PI;

function diametroCirculo(radio) {
  return 2 * radio;
}
function circunferenciaCirculo(radio) {
  const diam = diametroCirculo(radio);
  return PI * diam;
}
function areaCirculo(radio) {
  return PI * (radio * radio);
}

//Aqui se interactuará con el HTML
function calcularPerimetroCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;
  const perimetro = perimetroCuadrado(value);
  alert(perimetro);
}
function calcularAreaCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;
  const area = areaCuadrado(value);
  alert(area);
}
var h='';
function calcularAlturaTriangulo() {
  const inputL1 = document.getElementById("InputLado1");
  const valueL1 = inputL1.value;
  const inputL2 = document.getElementById("InputLado2");
  const valueL2 = inputL2.value;
  const inputB = document.getElementById("InputBase");
  const valueB = inputB.value;
  const altura = alturaIsoTriang(valueL1, valueL2, valueB);
  alert(altura.toFixed(4));
  h= altura;
}
function calcularAreaTriangulo() {
  const inputB = document.getElementById("InputBase");
  const valueB = inputB.value;
  const area = areaIsoTriang(valueB,h);
  alert(area.toFixed(4));
}

function calcularDiametroCirculo() {
  const input = document.getElementById("InputRadio");
  const value = input.value;
  const circunferencia = diametroCirculo(value);
  alert(circunferencia);
}

function calcularCircunferenciaCirculo() {
  const input = document.getElementById("InputRadio");
  const value = input.value;
  const perimetro = circunferenciaCirculo(value);
  alert(perimetro);
}

function calcularAreaCirculo() {
  const input = document.getElementById("InputRadio");
  const value = input.value;
  const area = areaCirculo(value);
  alert(area);
}
