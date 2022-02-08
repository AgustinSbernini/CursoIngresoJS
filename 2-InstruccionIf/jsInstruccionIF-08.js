/*
Sbernini Agustin DIV E
E/S ej if 8
Al ingresar una edad menor a 18 años y un estado civil distinto a "Soltero", NO HACER NADA,
pero si no es asi, y es soltero y no es menor, mostrar el siguiente mensaje: Es soltero y no es menor.
*/
function mostrar()
{
	//tomo la edad  
	var edadIngresada;
	var estadoCivilIngresado;

	edadIngresada = document.getElementById("txtIdEdad").value;
	edadIngresada = parseInt(edadIngresada);
	estadoCivilIngresado = document.getElementById("estadoCivil").value;
	estadoCivilIngresado = estadoCivilIngresado.toLowerCase();

	if(edadIngresada >17 && estadoCivilIngresado == "soltero")
	{
		alert("Es soltero y no es menor.");
	}

}

/*

entrada:
-Id
Id edadIngresada = txtIdEdad
Id estadoCivilIngresado = estadoCivil

proceso:
if
operadores racionales > ==
operador logico &&

salida:
alert

*/