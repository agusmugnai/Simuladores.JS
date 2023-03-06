
const rendimientoAnual = 0.75;

let montoDinero = parseInt(prompt("Bienvenido/a al Banco Los Andes\nPor favor coloque el monto de dinero a depositar: "));

let opcionTiempo = parseInt(prompt("¿Por cuánto tiempo será su plazo fijo? Por favor elija una opción:\n1) 30 días\n2) 60 días\n3) 90 días\n4) 120 días\n5) 180 días\n6) Anual"));

function plazoFijo(valorUno, valorDos, valorTres) {
  let resultado = (valorUno * valorDos) / valorTres;
  return resultado;
}


for (let i = 0; i < 1; i++) {
  let mensual = plazoFijo(montoDinero, rendimientoAnual, 12);
  let bimestral = plazoFijo(montoDinero, rendimientoAnual, 6);
  let trimestral = plazoFijo(montoDinero, rendimientoAnual, 4);
  let cuatrimestral = plazoFijo(montoDinero, rendimientoAnual, 3);
  let semestral = plazoFijo(montoDinero, rendimientoAnual, 2);
  let anual = plazoFijo(montoDinero, rendimientoAnual, 1);

  if (opcionTiempo == 1) {
    alert(`Su rendimiento mensual será de $${mensual}.`);
  } else if (opcionTiempo == 2) {
    alert(`Su rendimiento bimestral será de $${bimestral}.`);
  } else if (opcionTiempo == 3) {
    alert(`Su rendimiento trimestral será de $${trimestral}.`);
  } else if (opcionTiempo == 4) {
    alert(`Su rendimiento cuatrimestral será de $${cuatrimestral}.`);
  } else if (opcionTiempo == 5) {
    alert(`Su rendimiento semestral será de $${semestral}.`);
  } else if (opcionTiempo == 6) {
    alert(`Su rendimiento anual será de $${anual}.`);
  }
  else {
    alert("Opción no válida. Por favor, actualice la página y elija una nueva opción.");
  }
}




