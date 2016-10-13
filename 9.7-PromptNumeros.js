/*7 - Se realiza la carga de 10 valores enteros por teclado. Se desea conocer: a) La cantidad de valores negativos ingresados.
b) La cantidad de valores positivos ingresados.
c) La cantidad de múltiplos de 15.
d) El valor acumulado de los números ingresados que son pares.*/

var numero = new Array;
var cont = 0;
for (cont= 0; cont < 10; cont++){
	numero[cont]= prompt("introduzca un número");
}
var cantidadNegativos = 0;
var	cantidadPositivos = 0;
var multiples15 = 0;
var acumuladoPares = 0;

for (cont=0; cont < 10; cont++){
	if (numero[cont] < 0){
		cantidadNegativos++;
	}
	if (numero[cont] > 0){
		cantidadPositivos++;
	}
	if ((numero[cont] % 15) === 0){
		multiples15++;
	}
	if ((numero[cont]%2) === 0){
		acumuladoPares +=  parseInt(numero[cont]);
	}
	//Es necesario poner el parseInt porque sino la máquina considera que es una cadena de caracteres en lugar de un número
}

console.log("La cantidad de numeros negativos es " + cantidadNegativos + ". La cantidad de numeros positivos es " + cantidadPositivos + ". La cantidad de numeros multiples de 15 son "
 + multiples15 + ". La suma de los numeros pares es " + acumuladoPares);