/*
Sbernini Agustin DIV E
E/S ej if 6
Al ingresar una edad debemos informar si la persona es mayor de edad (mas de 18 años)
o adolescente (entre 13 y 17 años) o niño (menor a 13 años).
*/
function mostrar()
{
	//tomo la edad  
	var edadIngresada;

	edadIngresada = document.getElementById("txtIdEdad").value;
	edadIngresada = parseInt(edadIngresada);

	if(edadIngresada <13)
	{
		alert("Usted es un niño");
	}
	else
	{
		if (edadIngresada>17) 
		{
			alert("Usted es mayor de edad");
		}
		else
		{
			alert("Usted es un adolescente");
		}
	}

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