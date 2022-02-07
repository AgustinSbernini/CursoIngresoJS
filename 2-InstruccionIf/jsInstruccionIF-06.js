/*
Sbernini Agustin DIV E
E/S ej if 6
*/
function mostrar()
{
	//tomo la edad  
	var edadIngresada;

	edadIngresada=document.getElementById("txtIdEdad").value;
	edadIngresada=parseInt(edadIngresada);

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
*/