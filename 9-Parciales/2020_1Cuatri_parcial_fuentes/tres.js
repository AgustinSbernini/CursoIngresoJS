/* No corresponde al html, fue otro modelo de examen
Sbernini Agustin
3. Llegan vuelos con vacunas de distintos lugares del mundo
Mientras el usuario quiera se debe registrar de cada vuelo:
-Origen (“Asia”, “Europa”, “América”)
-Cantidad de vacunas (entre 500000 y 2500000)
-Costo del vuelo (entre 1 millón y 5 millones de pesos)
Informar:
a- El origen que envió menor cantidad de vacunas
b- El total sin descuentos a pagar por los gastos de los viajes
c- Si en total se recibieron mas de 10 millones de vacunas se hace
un descuento de 25%, Si se recibieron entre 5 y 10 millones (inclusive) el
descuento es del 15% con menor cantidad no hay descuento.
Informar si hubo descuento de cuanto fue y el importe final con
Descuento.
*/
function mostrar()
{
	var origen;
	var cantVacunasAsia = 0;
	var cantVacunasAmerica = 0;
	var cantVacunasEuropa = 0;
	var sumaAsia = 0;
	var sumaAmerica = 0;
	var sumaEuropa = 0;
	var cantVacunasTotal;
	var costoVuelo;
	var costoVueloTotal = 0;
	var vueloConDescuento;
	var respuesta = "si";


	while (respuesta == "si")
	{
		origen = prompt ("Ingrese el origen de donde proviene el vuelo");
		origen = origen.toLowerCase();

		while (origen != "asia" && origen != "america" && origen != "europa")
		{
			origen = prompt("Error, ingrese el origen, 'asia', 'america' o 'europa'");
			origen = origen.toLowerCase();
		}

		if (origen == "asia")
		{
			cantVacunasAsia = prompt("Ingrese la cantidad de vacunas provenientes de Asia");
			cantVacunasAsia = parseInt(cantVacunasAsia);
			while (isNaN(cantVacunasAsia) || cantVacunasAsia < 500000 || cantVacunasAsia > 2500000)
			{
				cantVacunasAsia = prompt("Error, la cantidad debe ser entre 500000 y 2500000)");
				cantVacunasAsia = parseInt(cantVacunasAsia);
			}
			sumaAsia = sumaAsia + cantVacunasAsia;
		}
		else
		{
			if (origen == "america")
			{
				cantVacunasAmerica = prompt("Ingrese la cantidad de vacunas provenientes de America");
				cantVacunasAmerica = parseInt(cantVacunasAmerica);
				while (isNaN(cantVacunasAmerica) || cantVacunasAmerica < 500000 || cantVacunasAmerica > 2500000)
				{
					cantVacunasAmerica = prompt("Error, la cantidad debe ser entre 500000 y 2500000)");
					cantVacunasAmerica = parseInt(cantVacunasAmerica);
				}
				sumaAmerica = sumaAmerica + cantVacunasAmerica;
			}
			else
			{
				cantVacunasEuropa = prompt("Ingrese la cantidad de vacunas provenientes de Europa");
				cantVacunasEuropa = parseInt(cantVacunasEuropa);
				while (isNaN(cantVacunasEuropa) || cantVacunasEuropa < 500000 || cantVacunasEuropa > 2500000)
				{
					cantVacunasEuropa = prompt("Error, la cantidad debe ser entre 500000 y 2500000)");
					cantVacunasEuropa = parseInt(cantVacunasEuropa);
				}
				sumaEuropa = sumaEuropa + cantVacunasEuropa;
			}
		}

		costoVuelo = prompt ("Ingrese el costo del vuelo en pesos");
		costoVuelo = parseInt(costoVuelo);

		while (isNaN(costoVuelo) || costoVuelo < 1000000 || costoVuelo > 5000000)
		{
			costoVuelo = prompt("Error, el costo del vuelo debe ser entre 1000000 y 5000000");
			costoVuelo = parseInt(costoVuelo);
		}

		costoVueloTotal = costoVueloTotal + costoVuelo;


		respuesta = prompt ("Desea seguir agregando datos? Responda 'si' o 'no'")
		respuesta = respuesta.toLowerCase();

		while(respuesta != "si" && respuesta != "no")
		{
			respuesta = prompt("Error, desea seguir agregando datos? Solo responda 'si' o 'no'")
			respuesta = respuesta.toLowerCase();
		}

	}

	cantVacunasTotal = sumaAsia + sumaEuropa + sumaAmerica;

	if (cantVacunasTotal > 10000000)
	{
		descuento = 25;
	}
	else
	{
		if (cantVacunasTotal > 4999999)
		{
			descuento = 15;
		}
		else
		{
			descuento = 0;
		}
	}

	vueloConDescuento = costoVueloTotal * (1 - (descuento/100));

	if (cantVacunasAsia <= cantVacunasEuropa && cantVacunasAsia <= cantVacunasAmerica)
	{
		menorVacunaAsia = "Asia";
	}
	else
	{
		menorVacunaAsia = " ";
	}

	if (cantVacunasAmerica <= cantVacunasEuropa && cantVacunasAmerica <= cantVacunasAsia)
	{
		menorVacunaAmerica = "America";
	}
	else
	{
		menorVacunaAmerica = " ";
	}

	if (cantVacunasEuropa <= cantVacunasAmerica && cantVacunasEuropa <= cantVacunasAsia)
	{
		menorVacunaEuropa = "Europa";
	}
	else
	{
		menorVacunaEuropa = " ";
	}

	document.write("El/Los origen/es que menor cantidad de vacunas envio/aron es/son " + menorVacunaEuropa + " " + menorVacunaAmerica + " " + menorVacunaAsia + "<br>");

	document.write("El total a pagar sin descuento por los vuelos es de " + costoVueloTotal + "$ " + "<br>");

	if (descuento == 0)
	{
		document.write("No hubo descuento por los vuelos");
	}
	else
	{
		document.write("El descuento aplicado fue de " + descuento + "% y el importe total es de " + vueloConDescuento + "<br>" );
	}

}