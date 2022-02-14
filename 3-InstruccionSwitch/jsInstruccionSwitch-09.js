/*
Sbernini Agustin DIV E
E/S ej switch 9
una agencia de viajes debe sacar las tarifas de los viajes , se cobra $15.000 por cada estadia como base,
se pide el ingreso de una estacion del año y localidad para vacacionar para poder calcular el precio final
en Invierno: bariloche tiene un aumento del 20% cataratas y Cordoba tiene un descuento del 10% 
Mar del plata tiene un descuento del 20%
en Verano: bariloche tiene un descuento del 20% cataratas y Cordoba tiene un aumento del 10%
Mar del plata tiene un aumento del 20%
en Otoño y Primavera: bariloche tiene un aumento del 10% cataratas tiene un aumento del 10%
Mar del plata tiene un aumento del 10% y Cordoba tiene el precio sin descuento
*/

function mostrar()
{
	var estacion = document.getElementById("txtIdEstacion").value;
	var destino = document.getElementById("txtIdDestino").value;
	var cuenta;
	
	switch (estacion)
	{
		case "Invierno":
			{
				switch (destino)
				{
					case "Bariloche":
						cuenta = 15000*1.2;
						break;

					case "Cataratas":
					case "Cordoba":
						cuenta = 15000*0.9;
						break;

					default:
						cuenta = 15000*0.8;	
				}
			}
			break;

		case "Verano":
			{
				switch (destino)
				{
					case "Bariloche":
						cuenta = 15000*0.8;
						break;

					case "Cataratas":
					case "Cordoba":
						cuenta = 15000*1.1;
						break;

					default:
						cuenta = 15000*1.2;
				}
			}
			break;

		case "Otoño":
		case "Primavera":
			{
				switch (destino)
				{
					case "Bariloche":
					case "Cataratas":
					case "Mar del plata":
						cuenta = 15000*1.1;
						break;
						
					default:
						cuenta = 15000;
				}
			}
			break;

	}

	alert("El precio final de su estadía es de $" + cuenta);

}