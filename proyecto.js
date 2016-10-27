var nombres = new Array;

function guardar(){


	var i;
	var x = document.getElementById("form1");
	for (i=0; i < x.length; i++){
	nombres.push(x.elements[i].value);

}
}

function escribir(item, index){

	document.getElementById("hoja").innerHTML = document.getElementById("hoja").innerHTML + item + "<br/>";
	document.getElementById("hoja").style.color = "red";
}






