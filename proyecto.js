
var horario = new Array;
var hmanana = new Array;
var htarde = new Array;
var hotro = new Array;

hmanana= ["8:00", "9:00", "10:00", "11:00", "11:30", "12:30", "13:30", "14:30"];
htarde=["15:00", "16:00", "17:00", "18:00", "18:30", "19:30", "20:30", "21:30"];
horario=[hmanana, htarde];

var i;


function mensajeHora(fecha){
	
	document.getElementById("fecha").innerHTML = "Generat per Institut Ribera Baixa el "+  hoy.getDate() + "/" + (hoy.getMonth() + 1) + "/" + hoy.getFullYear() + " a les " + hoy.toLocaleTimeString();
}

function completarForm(){

	
	for (i=0 ; i < document.form2.length ; i++){
		if (document.form2.elements[i].type === "text")
			hotro[i]= document.form2.elements[i].value;
	}

	document.getElementById("otroSelect").style.visibility = "collapse";
	document.getElementById("boton2").style.visibility = "hidden";
	document.getElementById("1").innerHTML = hotro[0] + " - " + hotro[1];
    document.getElementById("2").innerHTML = hotro[2] + " - " + hotro[3];
	document.getElementById("3").innerHTML = hotro[4] + " - " + hotro[5];
	document.getElementById("4").innerHTML = hotro[6] + " - " + hotro[7];
	document.getElementById("5").innerHTML = hotro[8] + " - " + hotro[9];
	document.getElementById("6").innerHTML = hotro[10] + " - " + hotro[11];
	document.getElementById("7").innerHTML = hotro[12] + " - " + hotro[13];
	document.getElementById("central").style.width= "91%";
	document.getElementById("fecha").style.visibility= "visible";
	document.getElementById("formulario").style.width="35%";
	document.getElementById("botonS").style.visibility= "visible";
	
	mensajeHora(hoy);

}


function elegirHorario(){
	
	if (document.form1.select1.options[document.form1.select1.selectedIndex].value === "manana"){
		document.getElementById("comida").style.visibility = "visible";
		document.getElementById("añadido").style.visibility = "hidden";
		document.getElementById("1").innerHTML = horario[0][0] + " - " + horario[0][1];
		document.getElementById("2").innerHTML = horario[0][1] + " - " + horario[0][2];
		document.getElementById("3").innerHTML = horario[0][2] + " - " + horario[0][3];
		document.getElementById("4").innerHTML = horario[0][3] + " - " + horario[0][4];
		document.getElementById("5").innerHTML = horario[0][4] + " - " + horario[0][5];
		document.getElementById("6").innerHTML = horario[0][5] + " - " + horario[0][6];
		document.getElementById("7").innerHTML = horario[0][6] + " - " + horario[0][7];
	}else if (document.form1.select1.options[document.form1.select1.selectedIndex].value === "tarde"){
		document.getElementById("comida").style.visibility = "visible";
		document.getElementById("añadido").style.visibility = "hidden";
		document.getElementById("1").innerHTML = horario[1][0] + " - " + horario[1][1];
		document.getElementById("2").innerHTML = horario[1][1] + " - " + horario[1][2];
		document.getElementById("3").innerHTML = horario[1][2] + " - " + horario[1][3];
		document.getElementById("4").innerHTML = horario[1][3] + " - " + horario[1][4];
		document.getElementById("5").innerHTML = horario[1][4] + " - " + horario[1][5];
		document.getElementById("6").innerHTML = horario[1][5] + " - " + horario[1][6];
		document.getElementById("7").innerHTML = horario[1][6] + " - " + horario[1][7];
	}else if(document.form1.select1.options[document.form1.select1.selectedIndex].value === "mixto"){
		document.getElementById("1").innerHTML = horario[0][1] + " - " + horario[0][2];
		document.getElementById("2").innerHTML = horario[0][2] + " - " + horario[0][3];
		document.getElementById("3").innerHTML = horario[0][3] + " - " + horario[0][4];
		document.getElementById("4").innerHTML = horario[0][4] + " - " + horario[0][5];
		document.getElementById("5").innerHTML = horario[0][5] + " - " + horario[0][6];
		document.getElementById("comida").style.visibility = "collapse";
		document.getElementById("7").innerHTML = horario[1][0] + " - " + horario[1][1];
		document.getElementById("añadido").style.visibility = "visible";
		document.getElementById("8").innerHTML = horario[1][1] + " - " + horario[1][2];

	}else if(document.form1.select1.options[document.form1.select1.selectedIndex].value === "Otro"){
		document.getElementById("comida").style.visibility = "visible";
		document.getElementById("añadido").style.visibility = "hidden";
		document.getElementById("otroSelect").style.visibility = "visible";
		document.getElementById("boton2").style.visibility = "visible";
		document.getElementById("inputS").focus();
		document.getElementById("central").style.width= "65%";
		document.getElementById("formulario").style.width= "25%";
		document.getElementById("fecha").style.visibility= "hidden";
		document.getElementById("botonS").style.visibility= "hidden";

}


	hoy = new Date();
		mensajeHora(hoy);



}