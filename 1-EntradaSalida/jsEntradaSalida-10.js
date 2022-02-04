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

	descuento = prompt("Ingrese su descuento en numero (Ej: si es 10% ingrese 10)");
	descuento = parseFloat(descuento);
	valorDescuento = importe * (descuento/100);
	resultado = importe - valorDescuento;

	// muestro el resultado
	document.getElementById("txtIdResultado").value = resultado;
	alert("Su importe es de "+ importe + ", el descuento es de "+ valorDescuento + " y su importe con descuento es de " + resultado )


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
/*
10 bis 
lo anterior mas.
se debe pedir el % por prompt

mostrar por alert el importe, el descuento, el importe con Descuento
"su importe es 1000 , el Descuento es de 250 y su importe con descuento es 750"
*/

