class Cliente {
    constructor(nombre, apellido, dni) {
        this.nombre = nombre,
            this.apellido = apellido,
            this.dni = dni
    }
}
const listaClientes = [];

let bienvenida = alert("Bienvenido/a al Banco Los Andes.");
//menu inicio
function menuInicio() {
    let opciones = parseInt(prompt("¿En qué te podemos ayudar?\n1) Clientes\n2) Mi cuenta\n3) Compra de divisas / Plazo fijo\n4) Turnos\n5) Salir"));
    return opciones;
}
let opcion1 = menuInicio();
switch (opcion1) {
    case 1: opcionCliente();
        break;
    case 2:
        break;
    case 3: opcionDinero();
        break;
    case 4:
        break;
    case 5:
        break;

}
// cliente
function opcionCliente() {
    let opciones = parseInt(prompt("1) Alta cliente\n2) Modificación \n3) Baja cliente\n"));
    return opciones;
}
function altaCliente() {
    let nombre = prompt("Ingrese el nombre del nuevo cliente.");
    let apellido = prompt("Ingrese el apellido del nuevo cliente.");
    let dni = parseInt(prompt("Ingrese el dni del nuevo cliente."));
    let cliente = new Cliente(nombre, apellido, dni)
    listaClientes.push(cliente);
}
function modificaciónCliente() {
    let dni = parseInt(prompt("Ingrese el dni del cliente."));
    let cliente = listaClientes.find(cliente => cliente.dni === dni);
    let indice = listaClientes.indexOf(cliente);
    let nombre = prompt("Ingrese el nombre del nuevo cliente.");
    let apellido = prompt("Ingrese el apellido del nuevo cliente.");
    let clienteModificado = new Cliente(nombre, apellido, dni);
    listaClientes.splice(indice, 1, clienteModificado);

}
function bajaCliente() {
    let dni = parseInt(prompt("Ingrese el dni del cliente."));
    let cliente = listaClientes.find(cliente => cliente.dni === dni);
    let indice = listaClientes.indexOf(cliente);
    listaClientes.splice(indice, 1);
}
let opcion3 = opcionCliente();
switch (opcion3) {
    case 1: altaCliente();
        break;
    case 2: modificaciónCliente();
        break;
    case 3: bajaCliente();
        break
}
// mi cuenta
function opcionCuenta() {
    let dni = prompt("Ingrese el DNI del cliente: ");
    let cliente = listaClientes.find(cliente => cliente.dni === dni);
    alert(cliente);
}


//DIVISAS

let dolarHoy = 206.75;

function compraDolar(valorUno, valorDos) {
    let resultado = valorUno * valorDos;
    return resultado;
}

function opcionDinero() {
    let opcion = parseInt(prompt("1) Compra de divisas\n2) Plazo fijo"));
    return opcion;
}

function compraDivisas() {
    let montoPedido = parseFloat(prompt("Por favor indique la cantidad de dolares que desea comprar: \n(No debe ser mayor a 200.)"));
    let resultadoDolar = compraDolar(montoPedido, dolarHoy);
    if (montoPedido <= 200) {
        alert(`Se debitarán de su cuenta $${resultadoDolar}.`);
    } while (montoPedido > 200) {
        montoPedido = parseFloat(prompt("Valores inválidos. Por favor indique un monto menor a 200 dólares:"));
    } if (montoPedido <= 200) {
        alert(`Se debitarán de su cuenta $${resultadoDolar}.`);
    }
}
//PLAZO FIJO
let rendimientoAnual = 0.75;

function plazoFijo(valorUno, valorDos, valorTres) {
    let resultado = (valorUno * valorDos) / valorTres;
    return resultado;
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
    function calculoPlazoFijo() {
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
        }
    }
    while (tiempo > 6) {
        alert("Opción no válida. Por favor, elija una nueva opción.");
        tiempo = parseInt(prompt("1) 30 días\n2) 60 días\n3) 90 días\n4) 120 días\n5) 180 días\n6) Anual"));
        calculoPlazoFijo();
    }
}

let opcion2 = opcionDinero()
switch (opcion2) {
    case 1: compraDivisas();
        break;
    case 2: resultadoPlazoFijo();
        break;
}
//turnos

