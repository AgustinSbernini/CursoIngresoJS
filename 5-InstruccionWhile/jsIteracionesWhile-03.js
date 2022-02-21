/*
Sbernini Agustin DIV E
E/S ej while 3
al presionar el botón pedir la CLAVE (ayuda: es utn750)
*/

function mostrar()
{
	
	var claveIngresada;
	claveIngresada = prompt("ingrese el número clave.");

	while (claveIngresada != "utn750")
	{
		
		claveIngresada = prompt("La contraseña es incorrecta, vuelve a intentarlo.");
		
	}

	alert ("Bienvenido");

}