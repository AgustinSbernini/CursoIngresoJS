/*
Sbernini Agustin DIV E
E/S ej while 7
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	var contador = 0;
	var acumulador = 0;
	var respuesta = 0;
	
	while (!(isNaN(respuesta)))
	{
		respuesta = prompt ("Ingrese los numeros que quiera, para finalizar la operación ingrese alguna letra");
		respuesta = parseInt(respuesta);

		if (!(isNaN(respuesta)))
		{	
		contador = contador + 1;
		acumulador = acumulador + respuesta;
		}
		else
		{
			respuesta = prompt ("Seguro que desea finalizar la operación? (ingrese 'si' o 'no') ");
			resputes = respuesta.toLowerCase();
			if (respuesta != "si")
			{
				respuesta = 0;
			}
		}
	}

	document.getElementById("txtIdSuma").value= "La suma de los numeros es " + acumulador;
	document.getElementById("txtIdPromedio").value="El promedio es " + acumulador/contador;

}