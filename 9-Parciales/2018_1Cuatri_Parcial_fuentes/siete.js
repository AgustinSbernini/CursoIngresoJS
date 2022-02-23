function mostrar()
{
	var nota;
	var sexo;
	var contador = 0;

	var menorNota = 11;
	var menorSexo;
	var sumaNotas = 0;
	var promedioNotas;
	var cantVaronesNotaAlta = 0;
	

	while (contador < 5)
	{
		nota = prompt ("Ingrese la nota del alumno");
		nota = parseInt(nota);

		while (nota > 10 || nota < 0)
		{
			nota = prompt("Error, reingrese la nota del alumno");
			nota = parseInt(nota);
		}

		sexo = prompt("Ingrese 'F' o 'M' segun el sexo del alumno");
		sexo = sexo.toUpperCase();

		while (sexo != "F" && sexo != "M")
		{
			sexo = prompt ("Error, reingrese 'F' o 'M' segun el sexo del alumno");
			sexo = sexo.toUpperCase();
		}

		if (nota < menorNota)
		{
			menorNota = nota;
			menorSexo = sexo;
		}

		if (sexo == "M" && nota > 5)
		{
			cantVaronesNotaAlta = cantVaronesNotaAlta + 1;
		}

		contador = contador + 1;

		sumaNotas = sumaNotas + nota;
	}

	promedioNotas = (sumaNotas / contador);
	document.write("El promedio de las notas totales es " + promedioNotas + "<br>");

	document.write("La nota más baja es " + menorNota + " y le pertenece a alguien del sexo " + menorSexo + "<br>");

	document.write("La cantidad de varones con una nota mayor o igual a 6 es " + cantVaronesNotaAlta + "<br>");
}