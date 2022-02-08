/*
Sbernini Agustin DIV E
E/S ej if 3
Al ingresar una edad debemos informar si la persona es mayor de edad,
sino informar que es un menor de edad.
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
	else
	{
		alert("Usted es menor de edad")
	}

}

/*

entrada:
-Id
Id edadIngresada = txtIdEdad

proceso:
if else
Operador racional >

salida:
alert

*/