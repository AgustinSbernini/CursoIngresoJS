/*
Sbernini Agustin DIV E
E/S ej if 1
Al ingresar una edad que sea igual a 15, mostrar el mensaje "niña bonita".
*/

function mostrar()
{
	//declaro la variable
	
	var edad;  
	
	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);

	//ejecuto la función
	
	if (edad == 15)
	{
		alert("niña bonita");
	}

	//finalizo la función

	alert("Fin de la función");	

}
//FIN DE LA FUNCIÓN