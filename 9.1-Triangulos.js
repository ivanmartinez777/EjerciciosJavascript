/*1 - Confeccionar un programa que lea 3 pares de datos, cada par de datos corresponde a la medida de la base y la altura de un triángulo. El programa deberá informar:
a) De cada triángulo la medida de su base, su altura y su superficie.
b) La cantidad de triángulos cuya superficie es mayor a 12. */

var triangulo = new Array;
var base = new Array;
var altura = new Array;
var cont;

base = [4,7,2];
altura = [6,5,9];
triangulo = [base, altura];

/*for ( cont = 0; cont < 3; cont++){
	base[cont] = prompt('Introduzca la base del triangulo');
	altura[cont] = prompt('introduzca la altura del triangulo');
	triangulo.push([base[cont], altura[cont]]);
}*/

for (cont = 0; cont < 3; cont++){
	triangulo[cont] = [base[cont], altura[cont]];
	console.log("El triangulo " + (cont+1) + " tiene una base de " + triangulo[cont][0] + " y una altura de " + triangulo[cont][1] +
	 ". Por lo tanto, su superficie será de " + ((triangulo[cont][0] * triangulo[cont][1])/2));
}

var mayor = 0;

for (cont = 0; cont < 3; cont++){
	if (((triangulo[cont][0] * triangulo[cont][1])/2) > 12){
		mayor++;
	}
} 
console.log("El número de triangulos cuya superficie es superior a 12 es " + mayor);
	