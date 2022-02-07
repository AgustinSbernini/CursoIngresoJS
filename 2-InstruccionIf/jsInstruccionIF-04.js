/*
Sbernini Agustin DIV E
E/S ej if 4
*/
function mostrar()
{
	//tomo la edad  
	var edadIngresada;

	edadIngresada=document.getElementById("txtIdEdad").value;
	edadIngresada=parseInt(edadIngresada);

	if (edadIngresada > 12 && edadIngresada < 18)
	{
		alert("Usted es adolescente");
	}

	alert("Fin de la función");

}