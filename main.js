let bienvenida = alert("Bienvenido/a al Banco Los Andes.");

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


const listaClientes = [cliente0, cliente1];

for (let nombre of listaClientes){
    console.log(nombre);
}


let opcionCliente = () => {
    return parseInt(prompt("1) Alta cliente\n2) Modificación \n3) Baja cliente\n"));
}
let salirOperacion = () => {
    let menuSalirCliente = parseInt(prompt("¿Desea realizar alguna otra operación?\n1) Sí\n2) No"));
    if (menuSalirCliente === 1) {
        return menuInicio();
    } else {
        return alert("Gracias por confiar en Banco Los Andes.");
    }
}


function altaCliente() {
    let nombre = prompt("Ingrese el nombre del nuevo cliente.");
    let apellido = prompt("Ingrese el apellido del nuevo cliente.");
    let dni = parseInt(prompt("Ingrese el DNI del nuevo cliente."));
    let cliente = new Cliente(nombre, apellido, dni)
    listaClientes.push(cliente);
    alert(`El cliente ${apellido} ${nombre} se ha dado de alta satisfactoriamente.`)
    return alert(salirOperacion());
}

function modificacionCliente() {
    let dni = parseInt(prompt("Ingrese el DNI del cliente."));
    let cliente = listaClientes.find(cliente => cliente.dni === dni);
    let indice = listaClientes.indexOf(cliente);
    let nombre = prompt("Ingrese el nombre del nuevo cliente.");
    let apellido = prompt("Ingrese el apellido del nuevo cliente.");
    let clienteModificado = new Cliente(nombre, apellido, dni);
    listaClientes.splice(indice, 1, clienteModificado);
    alert(`El cliente ${apellido} ${nombre} se ha modificado con éxito.`)
    return alert(salirOperacion());
}

function bajaCliente() {
    let dni = parseInt(prompt("Ingrese el DNI del cliente."));
    let cliente = listaClientes.find(cliente => cliente.dni === dni);
    let indice = listaClientes.indexOf(cliente);
    listaClientes.splice(indice, 1);
    alert(`El cliente ${apellido} ${nombre} se ha dado de baja satisfactoriamente.`)
    return alert(salirOperacion());
}


//-------------------------------------------------------------------

 function opcionCuenta() {
    let dni = parseInt(prompt("Ingrese el DNI del cliente: "));
    let clienteBuscado = listaClientes.find(cliente => cliente.dni === dni);
    alert(`El cliente ${JSON.stringify(clienteBuscado)} figura en nuestra base de datos.`);
    return alert(salirOperacion());
}

//-------------------------------------------------------

let dolarHoy = 209.23;

let compraDolar = (valorUno, valorDos) => {
    return valorUno * valorDos;
}

let opcionDinero = () => {
    return parseInt(prompt("1) Compra de divisas\n2) Plazo fijo"));
}


function compraDivisas() {
    let montoPedido = parseFloat(prompt("Por favor indique la cantidad de dolares que desea comprar: \n(No debe ser mayor a 200.)"));
    let resultadoDolar = compraDolar(montoPedido, dolarHoy);
    if (montoPedido <= 200) {
        alert(`Se debitarán de su cuenta $${resultadoDolar} pesos argentinos.`);
    } while (montoPedido > 200) {
        montoPedido = parseFloat(prompt("Valores inválidos. Por favor indique un monto menor a 200 dólares:"));
    } if (montoPedido <= 200) {
        alert(`Se debitarán de su cuenta $${resultadoDolar} pesos argentinos.`);
    } return alert(salirOperacion());
}

let rendimientoAnual = 0.75;

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
    } return alert(salirOperacion());
}
//---------------------------------------------------------------------------
let salir = () => {
    alert("Gracias por confiar en Banco Los Andes.");
}
//-----------------------------------------------------------


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

let opcion2 = opcionCliente();
switch (opcion2) {
    case 1:
        altaCliente();
        break;
    case 2:
        modificacionCliente();
        break;
    case 3:
        bajaCliente();
        break;
    default:
        alert("Opción incorrecta. Por favor ingrese una opción válida.");
}

let opcion3 = opcionDinero();
switch (opcion3) {
    case 1:
        compraDivisas();
        break;
    case 2:
        resultadoPlazoFijo();
        break;
    default:
        alert("Opción incorrecta. Por favor ingrese una opción válida.");
}  