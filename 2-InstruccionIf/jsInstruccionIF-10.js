/*
Sbernini Agustin DIV E
E/S ej if 10
Al presionar el Botón, asignar una nota RANDOM al examen y mostrar:
"EXCELENTE" para notas igual a 9 o 10,
"APROBÓ" para notas mayores a 4,
"Vamos, la proxima se puede" para notas menores a 4
*/
function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var numeroRandom

	numeroRandom = Math.floor((Math.random() * (10)) + 1);

	if(numeroRandom > 8)
	{
		alert("Su nota es "+ numeroRandom + " EXCELENTE");
	}
	else if (numeroRandom < 4)
	{
		alert("Su nota es "+ numeroRandom + ", vamos, la proxima se puede");
	}
	else
	{
		alert("Su nota es "+ numeroRandom + " y usted APROBÓ");
	}

}

/*

entrada:
numero random generado entre 1 y 10

proceso:
if - else if - else
operadores racionales > <

salida:
alert

*/