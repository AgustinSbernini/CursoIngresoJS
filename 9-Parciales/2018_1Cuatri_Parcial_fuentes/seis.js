function mostrar()
{
	var horaIngresada;

	horaIngresada = document.getElementById("laHora").value
	horaIngresada = parseInt(horaIngresada);

	while ((isNaN(horaIngresada) == true) || horaIngresada < 0 || horaIngresada > 24)
	{
		horaIngresada = prompt ("Error, ingrese un horario valido entre 00 y 24");
		horaIngresada = parseInt(horaIngresada);
	}

	switch (horaIngresada)
	{
		case 6:
		case 7:
		case 8:
		case 9:
		case 10:
		case 11:
			mensaje = "Es de mañana";
			break;
		case 12:
		case 13:
		case 14:
		case 15:
		case 16:
		case 17:
		case 18:
		case 19:
			mensaje = "Es de tarde";
			break;
		default:
			if (horaIngresada > 19)
			{
				mensaje = "Es de noche, a dormir";
			}
			else
			{
				mensaje = "Es de noche";
			}
	}

	alert(mensaje);
}
