/*
Sbernini Agustin DIV E
E/S ej switch 2
al seleccionar un mes informar.
si estamos en Invierno: "Abrigate que hace frio."
si aún no llego el Invierno: "Falta para el invierno."
si ya paso el Invierno: "Ya pasamos el frio, ahora calor!!!."
ACLARAcIÓN: tomamos a Julio y Agosto como los meses de Invierno.
*/

function mostrar()
{
	var mes = document.getElementById("txtIdMes").value;
	var mensaje;

	switch(mes)
	{
		case "Julio":
		case "Agosto":
			mensaje = "Abrigate que hace frio.";
			break;
		case "Septiembre":
		case "Octubre":
		case "Noviembre":
		case "Diciembre":
		case "Enero":
			mensaje = "Ya pasamos el frio, ahora calor!!!.";
			break;
		default:
			mensaje = "Falta para el invierno.";
	}

	alert(mensaje);

}