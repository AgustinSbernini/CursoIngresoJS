/*
Sbernini Agustin DIV E
E/S ej while 9
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.
*/
function mostrar()
{	
	var numeroIngresado;
	var numeroMaximo;
	var numeroMinimo;
	var flagPrimerNumero = 0; //subir o crear la bandera
	var respuesta = "si";


	while (respuesta == "si")
	{
		do
		{
		numeroIngresado = prompt ("Ingrese el numero que desee");
		numeroIngresado = parseInt(numeroIngresado);
		}while(isNaN(numeroIngresado) == true);

		if (flagPrimerNumero == 0)
		{
			numeroMaximo = numeroIngresado
			numeroMinimo = numeroIngresado
			flagPrimerNumero = 1; //bajar la bandera para que la función no vuelva a entrar.
		}
		else 
		{
			if (numeroIngresado > numeroMaximo)
			{
				numeroMaximo = numeroIngresado;
			}
			else 
			{
				if (numeroIngresado < numeroMinimo)
				{
					numeroMinimo = numeroIngresado;
				}			
			}
		}

		respuesta = prompt("Desea continuar ingresando numeros? (Responda 'si' o 'no')");
		respuesta = respuesta.toLowerCase();

		while (!(respuesta == "si" || respuesta == "no"))
		{
			respuesta = prompt ("Error, desea continuar ingresando numeros? (Responda 'si' o 'no')")
			respuesta = respuesta.toLowerCase();
		}
	}

	document.getElementById("txtIdMaximo").value = ("El numero maximo ingresado fue ") + numeroMaximo;
	document.getElementById("txtIdMinimo").value = ("El numero minimo ingresado fue ") + numeroMinimo;
}