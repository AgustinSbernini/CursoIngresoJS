function mostrar()
{
	var planeta;

	planeta = prompt("Ingrese un planeta");
	planeta = planeta.toLowerCase();

	while(!(planeta == "tierra" || planeta == "mercurio" || planeta == "venus" || planeta == "marte" || planeta == "jupiter" || planeta == "saturno" || planeta == "urano" || planeta == "neptuno" || planeta == "pluton"))
	{
		planeta = prompt ("Error, usted ingresó mal el nombre del planeta o el planeta ingresado no es valido");
		planeta = planeta.toLowerCase();
	}

	switch (planeta)
	{
		case "tierra":
			alert("Acá vivimos");
			break;
		case "mercurio":
		case "venus":
			alert("Acá hace más calor");
			break;
		default:
			alert("Acá hace más frio");
	}
}