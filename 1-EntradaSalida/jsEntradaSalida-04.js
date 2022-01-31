/*
Sbernini Agustin DIV E
E/S ej4 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{

	// declaro la variable
	var nombreIngresado;

	// guardo e ingreso un valor a la variable
	nombreIngresado = prompt("Ingrese su nombre");

	// muestro la variable dentro de la caja de texto
	// txtIdNombre.value = nombreIngresado; // otra opción
	document.getElementById("txtIdNombre").value = nombreIngresado;

}

/*

Entrada:
-prompt

Proceso:

Salida:
Value del Id
Id: txtIdNombre

*/