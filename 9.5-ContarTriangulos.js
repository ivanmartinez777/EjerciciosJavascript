/*5 - Realizar un programa que lea los lados de 4 triángulos, e informar: 
a) De cada uno de ellos, qué tipo de triángulo es: equilátero (tres lados iguales), isósceles (dos lados iguales), o escaleno (ningún lado igual)
b) Cantidad de triángulos de cada tipo.
c) Tipo de triángulo del que hay menor cantidad. */

var triangulo = new Array;
var lado1 = new Array;
var lado2 = new Array;
var lado3 = new Array;

lado1=[1,2,3,4];
lado2=[1,2,6,3];
lado3=[1,4,6,6];



var equilatero = 0;
var isosceles = 0;
var escaleno = 0;
var cont;

for (cont = 0; cont < 4; cont++){
	triangulo[cont] = [lado1[cont], lado2[cont], lado3[cont]];
	console.log(triangulo[cont]);
	if (triangulo[cont][0] === triangulo[cont][1] && triangulo[cont][0] === triangulo[cont][2]) {
		equilatero++;
	}else if (triangulo[cont][0] === triangulo[cont][1] || triangulo[cont][0] === triangulo[cont][2] || triangulo[cont][1] === triangulo[cont][2]){
		isosceles++;
	}else{
		escaleno++;
	}
}
console.log("Del tipo equilatero hay " + equilatero + ". Del tipo isosceles hay " + isosceles + ". Del tipo escaleno hay "+ escaleno);
var menor;
for (cont = 0; cont < triangulo.length; cont++){
	
	if (equilatero < isosceles && equilatero < escaleno) {
		menor = "el tipo que tiene menos triangulos de su tipo es el equilatero";
	}else if (isosceles < equilatero && isosceles < escaleno){
		menor = "el tipo que tiene menos triangulos de su tipo es el isosceles";
	}else if (escaleno < equilatero && escaleno < isosceles){
		menor = "el tipo que tiene menos triangulos de su tipo es el escaleno";
	}else{
		menor = "hay varios tipos de triangulos que tienen el menor numero";
	}
}

console.log(menor);