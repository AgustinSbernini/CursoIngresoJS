/*
Sbernini Agustin DIV E
E/S ej if 7
Al ingresar una edad menor a 18 años y un estado civil distinto a "Soltero",
mostrar el siguiente mensaje: "Es muy pequeño para NO ser soltero".
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

	if(edadIngresada <18 && estadoCivilIngresado != "soltero")
	{
		alert("Es muy pequeño para NO ser soltero");
	}
	else
	{
		alert("Todo en orden");
	}

}

/*

entrada:
-Id
Id edadIngresada = txtIdEdad
Id estadoCivilIngresado = estadoCivil

proceso:
if else
operadores racionales < !=
operador logico &&

salida:
alert

*/