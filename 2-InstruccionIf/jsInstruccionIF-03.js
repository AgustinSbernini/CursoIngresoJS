/*
Sbernini Agustin DIV E
E/S ej if 3
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