/*
Sbernini Agustin DIV E
E/S ej switch 4
al seleccionar un mes informar.
si tiene 28 días.
si tiene 30 días.
si tiene 31 días.
*/

function mostrar()
{
	var mes = document.getElementById("txtIdMes").value;
	var mensaje;

	switch(mes)
	{
		case "Febrero":
			mensaje = "Este mes tiene 28 días.";
			break;
		case "Enero":
		case "Marzo":
		case "Mayo":
		case "Julio":
		case "Agosto":
		case "Octubre":
		case "Diciembre":
			mensaje = "Este mes tiene 31 días.";
			break;
		default:
			mensaje = "Este mes tiene 30 días.";
	}
	
	alert (mensaje);	

}