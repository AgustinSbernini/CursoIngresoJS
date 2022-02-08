/*
Sbernini Agustin DIV E
E/S ej if 5
Al ingresar una edad solo debemos informar si la persona NO es adolescente.
*/
function mostrar()
{
	//tomo la edad  
	var edadIngresada;
	edadIngresada = document.getElementById("txtIdEdad").value;
	edadIngresada = parseInt(edadIngresada);

	if (edadIngresada <13 || edadIngresada>17)
	{
		alert("Usted no es adolescente");
	}
	
	alert("fin de la función")


}

/*

entrada:
-Id
Id edadIngresada = txtIdEdad

proceso:
if
operadores racionales < >
operador logico	||

salida:
alert

*/