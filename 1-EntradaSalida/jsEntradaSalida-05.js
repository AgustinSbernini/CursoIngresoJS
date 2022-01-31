/*
Sbernini Agustin DIV E
E/S ej5
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	

	// declaro variables
	var nombreIngresado;
	var edadIngresada;

	// guardo e ingreso valores a las variables
	nombreIngresado = document.getElementById("txtIdNombre").value;
	edadIngresada = document.getElementById("txtIdEdad").value;

	// muestro las variables
	alert("Usted se llama " + nombreIngresado + " y tiene " + edadIngresada + " años");

}


/*

Entrada:
-Id
Id nombre: txtIdNombre
Id edad: txtIdEdad

Proceso:

Salida:
-alert

*/
