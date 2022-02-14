/*
Sbernini Agustin DIV E
E/S ej switch 3
al seleccionar un mes informar.
si es Febrero: " Este mes no tiene más de 29 días."
si NO es Febrero: "Este mes tiene 30 o más días"
*/

function mostrar()
{
	var mes = document.getElementById("txtIdMes").value;
	var mensaje;

	switch(mes)
	{
		case "Febrero":
			mensaje = "Este mes no tiene más de 29 días.";
			break;
		default:
			mensaje = "Este mes tiene 30 o más días";
	}

	alert(mensaje)

}