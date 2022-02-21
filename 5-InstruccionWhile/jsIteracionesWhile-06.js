/*
Sbernini Agustin DIV E
E/S ej while 6
Al presionar el botón pedir 5 números e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	var contador;
	var acumulador;
	var numeroIngresado;

	contador=0;
	acumulador=0;
	
	while(contador < 5)
	{

		numeroIngresado = prompt ("Ingrese sus numeros, hasta 5");
		numeroIngresado = parseInt(numeroIngresado);

		acumulador = acumulador + numeroIngresado;

		contador = contador + 1;

	}

	document.getElementById("txtIdSuma").value="La suma acumulada es " + acumulador;
	document.getElementById("txtIdPromedio").value="El promedio es " + acumulador/5;

}