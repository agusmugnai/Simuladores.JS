
const porcentMasaMadre = 0.20;
let cantHarina = parseInt(prompt(`¿Cuánta harina va a utilizar? (Coloque la cantidad en gramos)`));

function masa(valorUno, valorDos) {
  return cantHarina * porcentMasaMadre;
}

let resultado = masa(cantHarina, porcentMasaMadre);
alert(`Necesita ${resultado}gr de masa madre para su pan.`);

//CICLO

const respCorrecta = `2022`;

for (let i = 1; i <= 3; i++) {
  let preguntaUno = prompt(`¿En que año ganó Argentina la tercer copa del mundo en fútbol?`);
  if (preguntaUno === respCorrecta) {
    alert(`Felicitaciones. ¡Su respuesta correcta!`);
    break;
  } else {
    alert(`Respuesta incorrecta. Intente nuevamente.`);
  }
}