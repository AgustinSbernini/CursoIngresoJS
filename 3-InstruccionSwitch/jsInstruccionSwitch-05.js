/*
Sbernini Agustin DIV E
E/S ej switch 5
Al ingresar una hora, informar:
si está entre las 7 y las 11 : "Es de mañana.".
*/

function mostrar()
{

	var hora = document.getElementById("txtIdHora").value;
	var mensaje

	switch (hora)
	{
		case "7":
		case "8":
		case "9":
		case "10":
		case "11":
			mensaje = "Es de mañana.";
			break;
		default:
			mensaje = "No es de mañana.";
	}
	
	alert(mensaje);

}