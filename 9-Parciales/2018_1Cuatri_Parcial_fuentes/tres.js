function mostrar()
{
	var precio;
	var descuento;
	var precioFinal;

	precio = prompt ("ingrese el precio");
	precio = parseInt(precio);

	while (isNaN(precio) == true)
	{
		precio = prompt ("Error, ingrese el precio, solo numeros");
		precio = parseInt(precio);
	}

	descuento = prompt ("Ingrese el descuento (Ejemplo: Si tiene un descuento del 10% ingrese 10)");
	descuento = parseInt(descuento);

	while (isNaN(descuento) == true)
	{
		descuento = prompt ("Error, ingrese el descuento, solo numeros");
		descuento = parseInt(descuento);
	}

	precioFinal = (precio * (1 - descuento/100));
	precioFinal = precioFinal.toFixed(2);

	document.getElementById("elPrecioFinal").value = ("Su precio final es de $" + precioFinal);

}