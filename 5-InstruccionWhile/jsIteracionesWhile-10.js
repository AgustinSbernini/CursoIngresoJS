/*
Sbernini Agustin DIV E
E/S ej while 10
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positivos-negativos). 
*/
function mostrar()
{
	var numeroIngresado;
	var sumaNegativos = 0;
	var sumaPositivos = 0;
	var cantPositivos = 0;
	var cantNegativos = 0;
	var cantCeros = 0;
	var cantPares = 0;
	var respuesta = "si";

	while (respuesta == "si")
	{
		do
		{
		numeroIngresado = prompt ("Ingrese el numero que desee");
		numeroIngresado = parseInt(numeroIngresado);
		}while (isNaN(numeroIngresado) == true);

		if (numeroIngresado > 0)
		{
			sumaPositivos = sumaPositivos + numeroIngresado;
			cantPositivos = cantPositivos + 1;
		}
		else if (numeroIngresado < 0)
		{
			sumaNegativos = sumaNegativos + numeroIngresado;
			cantNegativos = cantNegativos + 1;
		}
		else
		{
			cantCeros = cantCeros + 1;
		}

		if ((numeroIngresado % 2) == 0)
		{
			cantPares = cantPares + 1;
		}

		respuesta = prompt ("Desea continuar ingresando numeros? (Responda 'si' o 'no')");
		respuesta = respuesta.toLowerCase();

		while (!(respuesta == "si" || respuesta == "no"))
		{
			respuesta = prompt("Error, desea continuar ingresando numeros? (Responda 'si' o 'no')")
			respuesta = respuesta.toLowerCase();
		}
	}

	document.write("La suma de los positivos es " + sumaPositivos + "<br>");
	document.write("La cantidad de numeros positivos es " + cantPositivos + "<br>");

	if (cantPositivos == 0)
	{
		document.write("El promedio de los numeros positivos es " + 0 + "<br>");
	}
	else
	{
		document.write("El promedio de los numeros positivos es " + (sumaPositivos / cantPositivos) + "<br>");
	}

	document.write("La cantidad de ceros es " + cantCeros + "<br>");
	document.write("La suma de los negativos es " + sumaNegativos + "<br>");
	document.write("La cantidad de numeros negativos es " + cantNegativos + "<br>");

	if (cantNegativos == 0) 
	{
		document.write("El promedio de los numeros negativos es " + 0 + "<br>");
	}
	else 
	{
		document.write("El promedio de los numeros negativos es " + (sumaNegativos / cantNegativos) + "<br>");
	}

	document.write("La cantidad de numeros pares es " + cantPares + "<br>");
	document.write("La diferencia entre numeros positivos y negativos es de " + (sumaPositivos + sumaNegativos));

}