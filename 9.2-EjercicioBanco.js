/*2 - En un banco se procesan datos de las cuentas corrientes de sus clientes. De cada cuenta corriente se conoce: número de cuenta, nombre del cliente y saldo actual. El ingreso de datos debe finalizar al ingresar un valor negativo en el número de cuenta.
Se pide confeccionar un programa que lea los datos de las cuentas corrientes e informe:
a) De cada cuenta: número de cuenta, nombre del cliente y estado de la cuenta según su saldo, sabiendo que:
Estado de la cuenta	'Acreedor' si el saldo es >0.
			'Deudor' si el saldo es <0.
			'Nulo' si el saldo es =0.
b) La suma total de los saldos acreedores. */

var cuenta = [];

var nCuenta = [];
var nombreCliente = [];
var saldo = [];
var estadoCuenta= [];
var cont = 0;

do{
	nCuenta[cont] = prompt("Introduzca el numero de cuenta");
	nombreCliente[cont] = prompt("Introduzca el nombre del cliente");
	saldo[cont]= prompt("Introduzca el saldo de la cuenta");
	if (saldo[cont] > 0){
		estadoCuenta[cont] ="Acreedor";
	}else if (saldo[cont] < 0){
		estadoCuenta[cont] = "Deudor";
	}else{
		estadoCuenta[cont] = "Nulo";
	}
	
	cuenta[cont]=([nCuenta[cont],nombreCliente[cont],saldo[cont],estadoCuenta[cont]]);
	
	cont++
}while((cuenta[cont-1][0]) >= 0);
cuenta.pop();

// Ya están introducidos todos los datos y hemos quitado el último valor que es el del número de cuenta  negativo
for(cont = 0; cont < cuenta.length; cont++){
	console.log(cuenta[cont][0] + " / " + cuenta[cont][1] + " / " + cuenta[cont][3]);
}

// Mostramos los datos de los clientes
var sumaAcreedores = 0;
for(cont = 0; cont < cuenta.length; cont++){
	
	if ((cuenta[cont][3]) === "Acreedor"){
		sumaAcreedores = sumaAcreedores + parseInt((cuenta[cont][2]));
	}
}

console.log("La suma total de los saldos acreedores es " + sumaAcreedores);
//Por último mostramos la suma de los saldos acreedores