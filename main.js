let bienvenida = alert("Bienvenido/a al Banco Andes.");

let menuInicio = () => {
    return parseInt(prompt("¿En qué te podemos ayudar?\n1) Clientes\n2) Mi cuenta\n3) Compra de divisas / Plazo fijo\n4) Salir"));

}

class Cliente {
    constructor(nombre, apellido, dni) {
        this.nombre = nombre,
            this.apellido = apellido,
            this.dni = dni
    }
}
const cliente0 = new Cliente("Roberta", "Mancini", 20202020);
const cliente1 = new Cliente("Mario", "Viaggio", 50505050);
const cliente2 = new Cliente("Anselmo", "Rossi", 30303030);
const cliente3 = new Cliente("Rosa", "Paz", 80808080);
/* const cliente4 = new Cliente(nombre, apellido, dni); */

const listaClientes = [cliente0, cliente1, cliente2, cliente3];

console.log("Estos son nuestros clientes adheridos:")
for (let cliente of listaClientes) {
    console.log(`${cliente.apellido}, ${cliente.nombre}`)
}


function opcionCliente() {
    let op2 = parseInt(prompt("1) Alta cliente\n2) Modificación \n3) Baja cliente\n"));
    if (op2 === 1) {
        altaCliente();
    } else if (op2 === 2) {
        modificacionCliente();
    } else if (op2 === 3) {
        bajaCliente();
    } else {
        alert("Opción incorrecta. Por favor ingrese una opción válida.");
    }
}

function altaCliente() {
    let nombre = prompt("Ingrese el nombre del nuevo cliente.");
    let apellido = prompt("Ingrese el apellido del nuevo cliente.");
    let dni = parseInt(prompt("Ingrese el DNI del nuevo cliente."));
    let cliente = new Cliente(nombre, apellido, dni);
    listaClientes.push(cliente);
    alert(`El cliente ${apellido} ${nombre} se ha dado de alta satisfactoriamente.`);
    console.log(cliente);
    return salir();
}

function modificacionCliente() {
    let dni = parseInt(prompt("Ingrese el DNI del cliente."));
    let cliente = listaClientes.find(cliente => cliente.dni === dni);
    let indice = listaClientes.indexOf(cliente);
    let nombre = prompt("Ingrese el nombre del nuevo cliente.");
    let apellido = prompt("Ingrese el apellido del nuevo cliente.");
    let clienteModificado = new Cliente(nombre, apellido, dni);
    listaClientes.splice(indice, 1, clienteModificado);
    alert(`El cliente ${apellido} ${nombre} se ha modificado con éxito.`);
    console.log(listaClientes);
    return salir();
}

function bajaCliente() {
    let dni = parseInt(prompt("Ingrese el DNI del cliente."));
    let cliente = listaClientes.find(cliente => cliente.dni === dni);
    let indice = listaClientes.indexOf(cliente);
    listaClientes.splice(indice, 1);
    alert(`El cliente ${JSON.stringify(cliente)} se ha dado de baja satisfactoriamente.`);
    console.log(listaClientes);
    return salir();
}

function opcionCuenta() {
    let dni = parseInt(prompt("Ingrese el DNI del cliente: "));
    let clienteBuscado = listaClientes.find(cliente => cliente.dni === dni);
    alert(`El cliente ${JSON.stringify(clienteBuscado)} figura en nuestra base de datos.`);
    return salir();
}


let dolarHoy = 211.75;

let compraDolar = (valorUno, valorDos) => {
    return valorUno * valorDos;
}

function opcionDinero() {
    let menuDinero = parseInt(prompt("1) Compra de divisas\n2) Plazo fijo"));
    if (menuDinero === 1) {
        compraDivisas();
    } else if (menuDinero === 2) {
        resultadoPlazoFijo();
    } else {
        alert("Opción incorrecta. Por favor ingrese una opción válida.");
    }
}


function compraDivisas() {
    let montoPedido = parseFloat(prompt("Por favor indique la cantidad de dolares que desea comprar: \n(No debe ser mayor a 200.)"));
    let resultadoDolar = compraDolar(montoPedido, dolarHoy);
    if (montoPedido <= 200) {
        alert(`Se debitarán de su cuenta $${resultadoDolar} pesos argentinos.`);
        return salir();
    } while (montoPedido > 200) {
        alert("Valores inválidos. Por favor indique un monto menor a 200 dólares:");
        break;
    }
}

let rendimientoAnual = 0.78;

let plazoFijo = (valorUno, valorDos, valorTres) => {
    return (valorUno * valorDos) / valorTres;
}


function resultadoPlazoFijo() {
    let deposito = parseInt(prompt("Por favor indique el monto de dinero a depositar: "));
    let tiempo = parseInt(prompt("¿Por cuánto tiempo será su plazo fijo? Por favor elija una opción:\n1) 30 días\n2) 60 días\n3) 90 días\n4) 120 días\n5) 180 días\n6) Anual"));

    let mensual = plazoFijo(deposito, rendimientoAnual, 12);
    let bimestral = plazoFijo(deposito, rendimientoAnual, 6);
    let trimestral = plazoFijo(deposito, rendimientoAnual, 4);
    let cuatrimestral = plazoFijo(deposito, rendimientoAnual, 3);
    let semestral = plazoFijo(deposito, rendimientoAnual, 2);
    let anual = plazoFijo(deposito, rendimientoAnual, 1);

    if (tiempo === 1) {
        alert(`Su rendimiento mensual será de $${mensual}`);
    } else if (tiempo === 2) {
        alert(`Su rendimiento bimestral será de $${bimestral}`);
    } else if (tiempo === 3) {
        alert(`Su rendimiento trimestral será de $${trimestral}`);
    } else if (tiempo === 4) {
        alert(`Su rendimiento cuatrimestral será de $${cuatrimestral}`);
    } else if (tiempo === 5) {
        alert(`Su rendimiento semestral será de $${semestral}`);
    } else if (tiempo === 6) {
        alert(`Su rendimiento anual será de $${anual}`);
    } else {
        alert("Opción no válida.");
    } return salir();
}

let salir = () => {
    alert("Gracias por confiar en Banco Andes.");
}

let opcion1 = menuInicio();
switch (opcion1) {
    case 1:
        opcionCliente();
        break;
    case 2:
        opcionCuenta();
        break;
    case 3:
        opcionDinero();
        break;
    case 4:
        salir();
        break;
    default:
        alert("Opción incorrecta. Por favor ingrese una opción válida.");
} 