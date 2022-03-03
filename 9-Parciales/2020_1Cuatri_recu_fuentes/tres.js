function mostrar()
{
	var nombre;
	var nacionalidad;
	var edad;
	var sexo;
	var estadoCivil;
	var temperatura;
	var respuesta = "si";
	var nacionalidadMasTemp;
	var masTemp = 0;
	var mayorEdadSoltero = 0;
	var cantMujeresSOV = 0;
	var cantTerceraEdad = 0;
	var edadSumaCasadas = 0;
	var edadContadorCasadas = 0;
	var edadPromedioCasadas;

	while (respuesta == "si")
	{

		do
		{
			nombre = prompt("Ingrese su nombre");
		} while (!(isNaN(nombre)));

		do
		{
			nacionalidad = prompt("Ingrese su nacionalidad");
		} while (! isNaN(nacionalidad));

		do
		{
			edad = prompt("Ingrese su edad");
		} while (isNaN(edad));

		sexo = prompt("Ingrese 'f' para femenino o 'm' para masculino");
		sexo = sexo.toLowerCase();

		while (sexo != "f" && sexo != "m")
		{
			sexo = prompt ("Error, solo ingrese 'f' o 'm'");
			sexo = sexo.toLowerCase();
		}

		estadoCivil = prompt("Ingrese su estado civil");
		estadoCivil = estadoCivil.toLowerCase();

		while (estadoCivil != "casado" && estadoCivil != "soltero" && estadoCivil != "viudo")
		{
			estadoCivil = prompt ("Error, solo ingrese 'casado', 'soltero' o 'viudo'");
			estadoCivil = estadoCivil.toLowerCase();
		}

		do
		{
		temperatura = prompt ("ingrese su temperatura corporal")
		} while(isNaN(temperatura) || temperatura < 10);

		if (temperatura > masTemp)
		{
			masTemp = temperatura;
			nacionalidadMasTemp = nacionalidad;
		}

		if (estadoCivil == "soltero" && edad > 17)
		{
			mayorEdadSoltero = mayorEdadSoltero + 1;
		}

		if ((estadoCivil == "soltero" || estadoCivil == "casado") && sexo == "f" )
		{
			cantMujeresSOV = cantMujeresSOV + 1;
		}

		if (edad > 60 && temperatura > 38)
		{
			cantTerceraEdad = cantTerceraEdad + 1;
		}

		if (sexo == "f" && estadoCivil == "casado")
		{
			edadContadorCasadas = edadContadorCasadas + 1;
			edadSumaCasadas = edadSumaCasadas + edad;
		}

		respuesta = prompt("Desea seguir ingresando datos? Responda 'si' o 'no'");
		respuesta = respuesta.toLowerCase();

		while (respuesta != "si" && respuesta != "no")
		{
			respuesta = prompt("Error, desea seguir ingresando datos? Responda 'si' o 'no'");
			respuesta = respuesta.toLowerCase();
		}
	}


	edadPromedioCasadas = edadSumaCasadas / edadContadorCasadas;

	document.write("La nacionalidad de la persona con más temperatura es " + nacionalidadMasTemp + "<br>");

	document.write("La cantidad de mayores de edad solteros son " + mayorEdadSoltero + "<br>");

	document.write("La cantidad de mujeres solteras o viudas es de " + cantMujeresSOV + "<br>");

	document.write("La cantidad de mujeres personas de la tercera edad con más de 38 de temperatura es de " + cantTerceraEdad + "<br>");

	if (isNaN(edadPromedioCasadas))
	{
		document.write("El promedio de edad de mujeres casadas es de " + 0 + "<br>");
	}
	else
	{
	document.write("El promedio de edad de mujeres casadas es de " + edadPromedioCasadas + "<br>");
	}
}
