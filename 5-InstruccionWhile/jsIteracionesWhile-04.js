/*
Sbernini Agustin DIV E
E/S ej while 4
al presionar el botón 
pedir un número entre 0 y 9 inclusive.
*/

function mostrar()
{
	var numeroIngresado;

	numeroIngresado = prompt("ingrese un número entre 0 y 9.");

	numeroIngresado = parseInt(numeroIngresado);

	while(isNaN(numeroIngresado) || (numeroIngresado < 0 || numeroIngresado > 9))
	{
		numeroIngresado =prompt ("El numero es incorrecto, vuelve a intentarlo.");
	}
	
	document.getElementById("txtIdNumero").value = "Su numero es " + numeroIngresado + " y es valido.";

}