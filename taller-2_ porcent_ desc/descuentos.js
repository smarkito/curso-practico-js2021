//  Fórmula para descuentos
// [Precio * (100 - Descuento)]/ 100
// var precio = 120;
// var descuento = 18;

// console.log({ precio, descuento, porcentDescuento, precioDescuento});

function calcPrecioDesc(precio, descuento) {
  var porcentDescuento = 100-descuento;
  var precioDescuento = (precio * porcentDescuento)/100;
  return precioDescuento
};

function PriceDiscountCalc() {
  var inputPrice = document.getElementById("InputPrice");
  var priceValue = inputPrice.value;
  
  var inputDiscount = document.getElementById("InputDiscount");
  var discountValue = inputDiscount.value;

  var precioConDescuento = calcPrecioDesc(priceValue, discountValue)

  var resultP = document.getElementById("ResultP");
  resultP.innerText = "Precio a pagar es de $" + precioConDescuento;
};