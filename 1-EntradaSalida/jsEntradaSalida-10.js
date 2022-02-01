/*
Sbernini Agustin DIV E
E/S ej10
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{

	// declaro las variables
	var importe;
	var resultado;
	var descuento;

	importe = document.getElementById("txtIdImporte").value;

	// parseFloat para convertir el texto en numero
	importe = parseFloat(importe);
	

	// realizo las operaciones

	descuento = importe * 0.25;

	resultado = importe - descuento;

	// muestro el resultado
	document.getElementById("txtIdResultado").value = resultado;


}

/*

entrada:
-Id
Id del importe: txtIdImporte

proceso:
operadores "*", "-"

salida
-Id
Id del resultado: txtIdResultado

*/