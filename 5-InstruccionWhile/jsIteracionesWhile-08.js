/*
Sbernini Agustin DIV E
E/S ej while 8
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.
*/
function mostrar()
{
	var respuesta;
	var sumaPositivos;
	var multiplicacionNegativos;
	sumaPositivos=0;
	multiplicacionNegativos=1;
	respuesta= 0;

	while (!(isNaN(respuesta)))
	{
		respuesta = prompt ("Ingrese los numeros que quiera, para finalizar la operación ingrese alguna letra");
		respuesta = parseInt(respuesta);

		if (!(isNaN(respuesta)))
		{
			if (respuesta >= 0)
			{
				sumaPositivos = (sumaPositivos + respuesta);
			}
			else
			{
				multiplicacionNegativos = (multiplicacionNegativos * respuesta);
			}
		}
		else
		{
			respuesta = prompt ("Seguro que desea finalizar la operación? (ingrese 'si' o 'no')");
			resputes = respuesta.toLowerCase();
			if (respuesta != "si")
			{
				respuesta = 0;
			}
		}
	}

	document.getElementById("txtIdSuma").value = ("La suma de los positivos es ") + sumaPositivos;
	document.getElementById("txtIdProducto").value = ("La multiplicación de los negativos es ") + multiplicacionNegativos;

}