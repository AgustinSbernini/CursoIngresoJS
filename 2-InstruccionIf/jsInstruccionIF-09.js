/*
Sbernini Agustin DIV E
E/S ej if 9
Al presionar el Botón, mostrar un número Random del 1 al 10 inclusive
*/
function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var numero;
	numero = Math.floor((Math.random() * (10 - 1)) +1);

	alert("El numero generado es " + numero );	

}

/*

entrada:
numero random generado

proceso:

salida:
alert

*/