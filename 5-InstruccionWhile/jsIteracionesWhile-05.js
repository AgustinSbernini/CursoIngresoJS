/*
Sbernini Agustin DIV E
E/S ej while 5
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.
*/
function mostrar()
{
	var sexoIngresado;
	sexoIngresado = prompt("ingrese f para femenino o  m para masculino");
	sexoIngresado = sexoIngresado.toLowerCase();

	while(!(sexoIngresado == "m" || sexoIngresado == "f"))
	{
		sexoIngresado = prompt("Error al ingresar el sexo, vuelve a intentarlo");
		sexoIngresado = sexoIngresado.toLowerCase();
	}

	if(sexoIngresado == "f")
	{
		document.getElementById("txtIdSexo").value= "Su sexo es femenino";
	}
	else
	{
		document.getElementById("txtIdSexo").value = "Su sexo es masculino";
	}
}