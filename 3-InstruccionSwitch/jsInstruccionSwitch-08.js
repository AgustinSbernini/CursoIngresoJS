/*
Sbernini Agustin DIV E
E/S ej switch 8
Al seleccionar un destino informar si hace FRIO o CALOR en ese destino
*/

function mostrar()
{
	var destino = document.getElementById("txtIdDestino").value;
	var mensaje;

	switch(destino)
	{
		case "Bariloche":
		case "Ushuaia":
			mensaje = "Hace frío";
			break;
		default:
			mensaje = "Hace calor";
			break;
	}

	alert(mensaje);

}