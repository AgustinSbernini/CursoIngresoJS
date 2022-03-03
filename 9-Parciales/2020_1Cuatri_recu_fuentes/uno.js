
function mostrar()
{
	var producto;
	var cantBarbijo = 0;
	var cantJabon = 0;
	var cantAlcohol = 0;
	var precio;
	var unidades;
	var marca;
	var fabricante;
	var jabonMasCaro;
	var alcoholPrecioAcum = 0;
	var jabonPrecioAcum = 0;
	var jabonFabricante;
	var barbijoPrecioAcum = 0;
	var jabonUnidades;
	var cantJabonCompras = 0;
	var cantAlcoholCompras = 0;
	var cantBarbijoCompras = 0;
	var respuesta = "si";

	while (respuesta == "si")
	{
		producto = prompt ("Ingrese el producto vendido");
		producto = producto.toLowerCase();

		while (producto != "jabon" && producto != "barbijo" && producto != "alcohol")
		{
			producto = prompt("Error, ingrese un producto valido");
			producto = producto.toLowerCase();
		}

		precio = prompt("Ingrese el precio del producto");
		precio = parseInt(precio);

		while (isNaN(precio) || precio < 100 || precio > 300)
		{
			precio = prompt("Error, el precio debe estar entre 100 y 300");
			precio = parseInt(precio);
		}

		unidades = prompt ("Ingrese la cantidad de unidades");
		unidades = parseInt(unidades);

		while (isNaN(unidades) || unidades < 1 || unidades > 1000)
		{
			unidades = prompt ("Error, las unidades deben ser entre 1 y 1000");
			unidades = parseInt(unidades);
		}

		marca = prompt ("Ingrese la marca");

		fabricante = prompt("Ingrese el fabricante");

		if (producto == "jabon")
		{
			if (cantJabon == 0)
			{
				jabonMasCaro = precio;
				jabonFabricante = fabricante;
				cantJabon = cantJabon + unidades;
				cantJabonCompras = cantJabonCompras + 1;
				jabonUnidades = unidades;
			}
			else
			{
				cantJabon = cantJabon + unidades;
				jabonPrecioAcum = jabonPrecioAcum + precio;
				cantJabonCompras = cantJabonCompras + 1

				if (jabonMasCaro < precio)
				{
					jabonMasCaro = precio;
					jabonUnidades = unidades;
					jabonFabricante = fabricante;
				}
			}

		}


		if (producto == "alcohol")
		{
			cantAlcohol = cantAlcohol + unidades;
			alcoholPrecioAcum = alcoholPrecioAcum + precio;
			cantAlcoholCompras = cantAlcoholCompras + 1;
		}

		if (producto == "barbijo")
		{
			cantBarbijo = cantBarbijo + unidades;
			barbijoPrecioAcum = barbijoPrecioAcum + precio;
			cantBarbijoCompras = cantBarbijoCompras + 1;
		}


		respuesta = prompt ("Desea seguir agregando productos? Responda 'si' o 'no'");
		respuesta = respuesta.toLowerCase();

		while (respuesta != "si" && respuesta != "no")
		{
			respuesta = prompt("Error, desea continuar? Responda 'si' o 'no'");
			respuesta = respuesta.toLowerCase();
		}
	}

	if (cantJabon >= cantAlcohol && cantJabon >= cantBarbijo)
	{
		promedioDeCompra = cantJabon / cantJabonCompras;
	}
	else
	{
		if (cantAlcohol >= cantJabon && cantAlcohol >= cantBarbijo)
		{
			promedioDeCompra = cantAlcohol / cantAlcoholCompras;
		}
		else
		{
			promedioDeCompra = cantBarbijo / cantBarbijoCompras;
		}
	}

	if (isNaN(jabonUnidades))
	{
		document.write("No se compraron Jabones" +  "<br>");
	}
	else
	{
		document.write("Del jabon más caro se compró " + jabonUnidades + " y su fabricante fue " + jabonFabricante + "<br>");
	}

	document.write("El promedio de unidades por compra del producto más vendido fue de " + promedioDeCompra + "<br>");

	document.write("La cantidad total de barbijos comprados es de " + cantBarbijo + "<br>");

}
