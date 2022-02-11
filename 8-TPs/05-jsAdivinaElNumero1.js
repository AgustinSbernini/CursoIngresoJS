/*
Sbernini Agustin DIV E
E/S tp5
Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
var numeroSecreto; 
var contadorIntentos;
var numeroIngresado;
var intentosRealizados;
var contador = 0;


function comenzar()
{

	numeroSecreto = Math.floor((Math.random() * (100)) +1);
	console.log (numeroSecreto);
}

function verificar()
{
	numeroIngresado = document.getElementById("txtIdNumero").value;
	contador = contador+1;

	if (numeroIngresado == numeroSecreto)
	{
		document.getElementById("txtIdIntentos").value = "Usted es un ganador!!! y en solo " + contador + " intentos";
	}

	else if (numeroIngresado > numeroSecreto)
	{
		document.getElementById("txtIdIntentos").value = "Se pasó...";
	}
	else
	{
		document.getElementById("txtIdIntentos").value = "falta...";
	}


}

/*

updateDisplay

*/