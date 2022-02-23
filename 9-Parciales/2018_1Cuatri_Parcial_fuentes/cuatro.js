function mostrar()
{
	var numeroUno;
	var numeroDos;
	var resultado;

	numeroUno = prompt("Ingrese su primer numero");
	numeroUno = parseInt(numeroUno);

	while(isNaN(numeroUno) == true)
	{
		numeroUno = prompt ("Error, ingrese solo un numero");
		numeroUno = parseInt(numeroUno);
	}

	numeroDos = prompt("Ingrese su segundo numero");
	numeroDos = parseInt(numeroDos);

	while (isNaN(numeroDos) == true)
	{
		numeroDos = prompt("Error, ingrese solo un numero");
		numeroDos = parseInt(numeroDos);
	}

	if (numeroUno == numeroDos)
	{
		alert(numeroUno + "" + numeroDos);
	}
	else if (numeroUno > numeroDos)
	{
		resultado = (numeroUno - numeroDos);

		alert(resultado);
	}
	else
	{
		resultado = (numeroUno + numeroDos);

		if (resultado > 10)
		{
			alert("la suma es " + resultado + " y supero el 10");
		}
		else
		{
			alert(resultado);
		}
	}
}