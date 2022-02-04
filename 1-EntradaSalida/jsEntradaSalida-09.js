/*
Sbernini Agustin DIV E
E/S ej9 bis
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{

	// declaro las variables
	var sueldo;
	var resultado;
	var aumento;

	sueldo = document.getElementById("txtIdSueldo").value;

	// parseFloat para convertir el texto en numero
	sueldo = parseFloat(sueldo);

	// realizo la operacion

	aumento = prompt("ingrese el aumento en numero entero (Ej: si es 10% ingrese 10)");
	aumento = parseInt(aumento);
	aumento = sueldo * (aumento/100);

	resultado = sueldo + aumento;

	// muestro el resultado
	document.getElementById("txtIdResultado").value = resultado;


}

/*

entrada:
-Id
Id del sueldo: txtIdSueldo

proceso:
operadores "*","+"

salida:
-Id
Id del resultado: txtIdResultado

*/
/*
9 bis 
lo anterior mas.
se debe pedir el % por prompt
*/

