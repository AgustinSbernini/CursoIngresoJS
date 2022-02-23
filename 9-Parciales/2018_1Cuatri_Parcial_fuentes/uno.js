function mostrar()
{
	var ancho;
	var largo;
	var perimetro;

	ancho = prompt("Ingrese el ancho de su rectangulo");
	ancho = parseInt(ancho);

	while (isNaN(ancho) == true)
	{
		ancho = prompt ("Error, ingrese el ancho de su rectangulo, solo ingrese numeros");
		ancho = parseInt(ancho);
	}

	largo = prompt("Ingrese el largo de su rectangulo");
	largo = parseInt(largo);

	while (isNaN(largo) == true)
	{
		largo = prompt ("Error, ingrese el largo de su rectangulo, solo ingrese numeros");
		largo = parseInt(largo);
	}

	perimetro = (2 * ancho) + (2 * largo);

	alert("El perimetro de su rectangulo es " + perimetro)
}