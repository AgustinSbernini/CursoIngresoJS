function mostrar()
{
	var numeroIngresado;
	var letraIngresada;
	var cantPares = 0;
	var cantImpares = 0;
	var cantCeros = 0;
	var sumaPositivos = 0;
	var cantPositivos = 0;
	var promedio;
	var sumaNegativos = 0;
	var numMax;
	var numMin;
	var flag = 0;
	var letraMax;
	var letraMin;
	var respuesta = "si";

	while (respuesta == "si")
	{
		numeroIngresado = prompt ("Ingrese un numero entre -100 y 100");
		numeroIngresado = parseInt(numeroIngresado);

		while (isNaN(numeroIngresado) || numeroIngresado < -100 || numeroIngresado > 100)
		{
			numeroIngresado = prompt("Error, ingrese un numero entre -100 y 100");
			numeroIngresado = parseInt(numeroIngresado);
		}

		letraIngresada = prompt ("Ingrese la letra que desee");

		while(!(isNaN(letraIngresada)))
		{
			letraIngresada = prompt ("Error, ingrese una letra");
		}

		if ((numeroIngresado % 2) == 0)
		{
			cantPares = cantPares + 1;
		}
		else
		{
			cantImpares = cantImpares + 1;
		}

		if (numeroIngresado > 0)
		{
			sumaPositivos = sumaPositivos + numeroIngresado;
			cantPositivos = cantPositivos + 1;
		}
		else if (numeroIngresado < 0) 
		{
			sumaNegativos = sumaNegativos + numeroIngresado;
		}
		else
		{
			cantCeros = cantCeros + 1;
		}

		if (flag == 0)
		{
			numMax = numeroIngresado;
			letraMax = letraIngresada;
			numMin = numeroIngresado;
			letraMin = letraIngresada;
			flag = 1;
		}
		else if (numeroIngresado > numMax)
		{
			numMax = numeroIngresado;
			letraMax = letraIngresada;
		}
		else if (numeroIngresado < numMin)
		{
			numMin = numeroIngresado;
			letraMin = letraIngresada;
		}

		respuesta = prompt ("Desea continuar ingresando numeros y letras?");
		respuesta = respuesta.toLowerCase();

		while (!(respuesta == "si" || respuesta == "no"))
		{
			respuesta = prompt ("Error, responda 'si' o 'no', desea continuar?");
			respuesta = respuesta.toLowerCase();
		}

	}

	promedio = sumaPositivos / cantPositivos;

	document.write("La cantidad de numeros pares es " + cantPares + "<br>");
	document.write("La cantidad de numeros impares es " + cantImpares + "<br>");
	document.write("La cantidad de ceros es " + cantCeros + "<br>");
	document.write("El promedio de todos los positivos es " + promedio + "<br>");
	document.write("La suma de todos los negativos es " + sumaNegativos + "<br>");
	document.write("El numero maximo fue " + numMax + " y la letra acompañante fue " + letraMax + "<br>");
	document.write("El numero minimo fue " + numMin + " y la letra acompañnte fue " + letraMin + "<br>");

}