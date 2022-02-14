/*
Sbernini Agustin DIV E
E/S ej if 6
Al ingresar una edad debemos informar si la persona es mayor de edad (mas de 18 años)
o adolescente (entre 13 y 17 años) o niño (menor a 13 años).
*/
/*
Ejercicio 6 bis(usar if else):
Al ingresar por prompt una edad debemos informar si
la persona es anciano(mas de 70), mayor de edad (entre 70 y 18 años),
adolescente (entre 13 y 17 años), niño (menor a 13 años), bebe (0 a 3 años).
mostrar por ID el resultado.
*/

function mostrar()
{
	//tomo la edad  
	var edadIngresada;
	var mensaje;

	edadIngresada = prompt("Ingrese tu edad");
	edadIngresada = parseInt(edadIngresada);

	if(edadIngresada > 69)
	{
		mensaje = "Usted es un anciano";
	}
	else 
	{
		if (edadIngresada > 17)
		{
			mensaje = "Usted es un adulto";
		}
		else
		{
			if (edadIngresada > 12)
			{
				mensaje = "Usted es un adolescente";
			}
			else
			{
				if (edadIngresada > 3)
				{
					mensaje = "Usted es un niño";
				}
				else
				{
					mensaje = "Usted es un bebe";
				}
			}
		}
	}


	document.getElementById("txtIdEdad").value = mensaje;
}

/*
Más optimo

if(edadIngresada >17)
{
	alert("Usted es mayor de edad");
}
else if (edad < 13)
{
	alert("Usted es un niño");
}
else
{
	alert("Usted es un adolescente");
}


entrada:
-Id
Id edadIngresada = txtIdEdad

proceso:
if else if else
operadores racionales > <

salida:
alert

*/