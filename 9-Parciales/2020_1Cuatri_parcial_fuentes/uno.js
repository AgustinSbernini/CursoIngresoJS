/* No corresponde al html, fue otro modelo de examen
Sbernini Agustin
1.	Una empresa de venta de cosméticos necesita un programa que permita la carga de productos vendidos,
 junto a los datos del vendedor. Se requiere ingresar los siguientes campos:
•	Vendedor: Juan, María, Lucrecia
•	Tipo producto: Perfume, Shampoo o Maquillaje
•	Importe de la venta (Numero mayor que cero)
No hay un límite total de ventas, y cada vendedor puede realizar varias ventas.
Una vez finalizada la carga de productos vendidos se debe calcular la comisión del vendedor.
Si la suma de las ventas realizadas por cada vendedor está entre 5000 y 10000, la comisión será del 15%.
Si la comisión supera los 10000, la comisión será del 20%. En caso contrario la comisión será del 5%.

Se debe mostrar:
a.	Promedio de ventas por cada vendedor.
b.	Cantidad de perfumes que vendió María
c.	El importe más barato junto con el vendedor que lo vendió.
d.	El nombre del vendedor con menor comisión.
*/

function mostrar()
{
	var vendedor;
	var producto;
	var importe;
	var comisionMaria;
	var comisionJuan;
	var comisionLucrecia;
	var promedioVentasJuan;
	var sumaVentaJuan = 0;
	var cantVentasJuan = 0;
	var promedioVentasMaria;
	var sumaVentaMaria = 0;
	var cantVentasMaria = 0;
	var promedioVentasLucrecia;
	var sumaVentaLucrecia = 0;
	var cantVentasLucrecia = 0;
	var contador = 0;
	var cantPerfumesMaria = 0;
	var importeMasBarato;
	var vendedorDelMasBarato;
	var VendedorMenorComision;
	var respuesta = "si";

	while (respuesta == "si")
	{
		vendedor = prompt("Quien es el vendedor del producto? Escriba solo su nombre");
		vendedor = vendedor.toLowerCase();

		while (!(vendedor == "juan" || vendedor == "maria" || vendedor == "lucrecia"))
		{
			vendedor = prompt ("Error, quien es el vendedor? Solo ingrese su nombre");
			vendedor = vendedor.toLowerCase();
		}

		producto = prompt("Que producto vendio?");
		producto = producto.toLowerCase();

		while (!(producto == "perfume" || producto == "shampoo" || producto == "maquillaje"))
		{
			producto = prompt("Error, ingreso un producto no valido, que producto vendio?");
			producto = producto.toLowerCase();
		}

		importe = prompt("Ingrese el importe del producto vendido?");
		importe = parseInt(importe);

		while (isNaN(importe) || importe < 0)
		{
			importe = prompt ("Error, ingrese el importe del producto vendido, solo numeros mayor a 0");
			importe = parseInt(importe);
		}

		if (vendedor == "juan")
		{
			sumaVentaJuan = sumaVentaJuan + importe;
			cantVentasJuan = cantVentasJuan + 1;
		}
		else
		{
			if (vendedor == "maria")
			{
				if (producto == "perfume") 
				{
					cantPerfumesMaria = cantPerfumesMaria + 1;
					sumaVentaMaria = sumaVentaMaria + importe;
					cantVentasMaria = cantVentasMaria + 1;
				}
				else
				{
					sumaVentaMaria = sumaVentaMaria + importe;
					cantVentasMaria = cantVentasMaria + 1;
				}
			}
			else
			{
				sumaVentaLucrecia = sumaVentaLucrecia + importe;
				cantVentasLucrecia = cantVentasLucrecia + 1;
			}
		}

		if (contador == 0)
		{
			importeMasBarato = importe;
			vendedorDelMasBarato = vendedor;
			contador = contador + 1;
		}
		else
		{
			if (importe < importeMasBarato)
			{
				importeMasBarato = importe;
				vendedorDelMasBarato = vendedor;
			}
		}



		respuesta = prompt("Desea seguir agregando ventas? ingrese 'si' o 'no'");
		respuesta = respuesta.toLowerCase();
		while (respuesta != "si" && respuesta != "no")
		{
			respuesta = prompt("Error, desea seguir agregando ventas? Solo ingrese 'si' o 'no'");
			respuesta = respuesta.toLowerCase();
		}

	}

	if (sumaVentaMaria < 5000)
	{
		comisionMaria = 0.05;
	}
	else
	{
		if (sumaVentaMaria < 10000)
		{
			comisionMaria = 0.15;
		}
		else
		{
			comisionMaria = 0.2;
		}
	}

	if (sumaVentaJuan < 5000)
	{
		comisionJuan = 0.05;
	}
	else
	{
		if (sumaVentaJuan < 10000)
		{
			comisionJuan = 0.15;
		}
		else
		{
			comisionJuan = 0.2;
		}
	}

	if (sumaVentaLucrecia < 5000)
	{
		comisionLucrecia = 0.05;
	}
	else
	{
		if (sumaVentaLucrecia < 10000)
		{
			comisionLucrecia = 0.15;
		}
		else
		{
			comisionLucrecia = 0.2;
		}
	}

	if (comisionLucrecia <= comisionJuan && comisionLucrecia <= comisionMaria)
	{
		VendedorMenorComisionL = "Lucrecia";
	}
	else
	{
		VendedorMenorComisionL = " ";
	}
	
	if (comisionMaria <= comisionJuan && comisionMaria <= comisionLucrecia)
	{
		VendedorMenorComisionM = "Maria";
	}
	else
	{
		VendedorMenorComisionM = " ";
	}
	
	if (comisionJuan <= comisionMaria && comisionJuan <= comisionLucrecia)
	{
		VendedorMenorComisionJ = "Juan";
	}
	else
	{
		VendedorMenorComisionJ = " ";
	}
	

	promedioVentasLucrecia = sumaVentaLucrecia / cantVentasLucrecia;
	promedioVentasMaria = sumaVentaMaria / cantVentasMaria;
	promedioVentasJuan = sumaVentaJuan / cantVentasJuan;

	if (isNaN(promedioVentasLucrecia))
	{
		document.write("El promedio de ventas de Lucrecia es de " + 0 + "<br>");
	}
	else
	{
		document.write("El promedio de ventas de Lucrecia es de " + promedioVentasLucrecia + "<br>");
	}
	if (isNaN(promedioVentasMaria))
	{
		document.write("El promedio de ventas de Maria es de " + 0 + "<br>");
	}
	else
	{
	document.write("El promedio de ventas de Maria es de " + promedioVentasMaria + "<br>");
	}
	if (isNaN(promedioVentasJuan))
	{
		document.write("El promedio de ventas de Juan es de " + 0 + "<br>");	
	}
	else
	{
	document.write("El promedio de ventas de Juan es de " + promedioVentasJuan + "<br>");
	}

	document.write("La cantidad de perfumes que vendió María es de " + cantPerfumesMaria + "<br>");

	document.write("El importe mas barato fue de " + importeMasBarato + " y su vendedor fue " + vendedorDelMasBarato + "<br>");

	document.write("El vendedor con menor comision fue/fueron " + VendedorMenorComisionJ + " " + VendedorMenorComisionL + " " + VendedorMenorComisionM + "<br>");

}