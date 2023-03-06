
const rendimientoAnual = 0.75;

let montoDinero = parseInt(prompt("Bienvenido/a al Banco Los Andes\nPor favor coloque el monto de dinero a depositar: "));

let opcionTiempo = parseInt(prompt("¿Por cuánto tiempo será su plazo fijo? Por favor elija una opción:\n1) 30 días\n2) 60 días\n3) 90 días\n4) 120 días\n5) 180 días\n6) Anual"));

function plazoFijo(valorUno, valorDos, valorTres) {
  let resultado = (valorUno * valorDos) / valorTres;
  return resultado;
}

let mensual = plazoFijo(montoDinero, rendimientoAnual, 12);
let bimestral = plazoFijo(montoDinero, rendimientoAnual, 6);
let trimestral = plazoFijo(montoDinero, rendimientoAnual, 4);
let cuatrimestral = plazoFijo(montoDinero, rendimientoAnual, 3);
let bianual = plazoFijo(montoDinero, rendimientoAnual, 2);
let anual = plazoFijo(montoDinero, rendimientoAnual, 1);


switch (opcionTiempo) {
  case (1):
    alert(`Su interés mensual será de $${mensual}`);
    break;
  case (2):
    alert(`Su interés bimestral será de $${bimestral}`);
    break;
  case (3):
    alert(`Su interés trimestral será de $${trimestral}`);
    break;
  case (4):
    alert(`Su interés cuatrimestral será de $${cuatrimestral}`);
    break;
  case (5):
    alert(`Su interés bianual será de $${bianual}`);
    break;
  case (6):
    alert(`Su interés anual será de $${anual}`);
    break;
  default:
    alert("Por favor ingrese una opción válida:\n1) 30 días\n2) 60 días\n3) 90 días\n4) 120 días\n5) 180 días\n6) Anual");
}

