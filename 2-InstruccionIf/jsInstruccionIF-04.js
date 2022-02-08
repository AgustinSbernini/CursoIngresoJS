/*
Sbernini Agustin DIV E
E/S ej if 4
Al ingresar una edad debemos informar si la persona es adolescente,
edad entre 13 y 17 años (inclusive).
*/
function mostrar()
{
	//tomo la edad  
	var edadIngresada;

	edadIngresada = document.getElementById("txtIdEdad").value;
	edadIngresada = parseInt(edadIngresada);

	if (edadIngresada > 12 && edadIngresada < 18)
	{
		alert("Usted es adolescente");
	}

	alert("Fin de la función");

}

/*

entrada:
-Id
Id edadIngresada = txtIdEdad

proceso:
if
Operadores racionales > <
Operador logico &&

salida:
alert

*/