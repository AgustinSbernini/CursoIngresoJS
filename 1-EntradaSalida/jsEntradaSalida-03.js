/*
Sbernini Agustin DIV E
E/S ej3
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{

	// declaro variable
	var nombreIngresado;

	// guardo e ingreso valor a la variable
	// nombreIngresado = txtIdNombre.value; //otra opción
	nombreIngresado = document.getElementById("txtIdNombre").value

	// muestro la variable
	alert("su nombre es " + nombreIngresado);

}


/*

entrada:
-Id: txtIdNombre

proceso:

salida:
-alert

*/