/*
Sbernini Agustin DIV E
E/S ej if 2
Al ingresar una edad debemos informar solo si la persona es mayor de edad
*/
function mostrar()
{
	//tomo la edad  
	var edadIngresada;

	edadIngresada = document.getElementById("txtIdEdad").value;

	edadIngresada = parseInt(edadIngresada);
	
	if (edadIngresada > 17) //es más optimo que >= 18
	{
		alert("Usted es mayor de edad");
	}

	alert("Fin de la función");

}

/*

entrada:
-Id
Id edadIngresada = txtIdEdad

proceso:
if
Operador racional >

salida:
alert

*/