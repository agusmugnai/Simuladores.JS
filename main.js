const dolarHoy = 212.5;

let compraDolar = (cantidad, dolar) => {
    return cantidad * dolar;
}

function confirmarCompra() {
    let totalCompra = compraDolar(montoPedido, dolarHoy);
    alert(`Su compra por $${montoPedido} dólares hará que se debiten $${totalCompra} en pesos argentinos de su caja de ahorro.`)
}
let montoPedido = parseFloat(prompt("Por favor indique la cantidad de dolares que desea comprar: \n(No debe ser mayor a 200.)"));

if (montoPedido <= 200) {
    confirmarCompra();
} else {
    alert("Lo sentimos, no es posible realizar la compra ya que el valor máximo permitido es de 200 dólares.")
}

class Divisas {
    constructor(nombre, valor) {
        this.nombre = nombre;
        this.valor = valor;
    }
}
let euroVenta = new Divisas("Euro Venta", 224.177);
let euroCompra = new Divisas("Euro Compra", 217.500);
let dolarVenta = new Divisas("Dolar Venta", 212.500);
let dolarCompra = new Divisas("Dolar Compra", 204.500);

let monedaSinImpuesto = [euroVenta, euroCompra, dolarVenta, dolarCompra];
console.log(monedaSinImpuesto);

const monedaConImpuesto = monedaSinImpuesto.map((valor) => {
    return {
        nombre: valor.nombre,
        valor: valor.valor * 1.65
    }
});
console.log(monedaConImpuesto);

let rendimientoAnual = 0.78;

const plazoFijo = (monto, rendimiento, tiempo) => {
    return (monto * rendimiento) / tiempo;
}
const totalPlazo = (rendimiento, deposito) => {
    return rendimiento + deposito;
}

let deposito = parseInt(prompt("Por favor indique el monto de dinero a depositar: "));
let tiempo = parseInt(prompt("¿Por cuánto tiempo será su plazo fijo? Indique la cantidad de días."));

let plazo = plazoFijo(deposito, rendimientoAnual, tiempo);
let plazoFinal = totalPlazo(plazo, deposito);

alert(`Su rendimiento será de $${plazo} al finalizar su plazo fijo.\nEn su cuenta de ahorro se acreditarán $${plazoFinal}.`);
