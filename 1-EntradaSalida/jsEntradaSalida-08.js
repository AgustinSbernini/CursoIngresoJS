/*
Sbernini Agustin DIV E
E/S ej8
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{

	// declaro la variable
	var dividendo;
	var divisor;
	var resto;

	dividendo = document.getElementById("txtIdNumeroDividendo").value;
	divisor = document.getElementById("txtIdNumeroDivisor").value;

	// parseInt para convertir el texto en numero entero
	dividendo = parseInt(dividendo);
	divisor = parseInt(divisor);

	// realizo la operacion
	resto = dividendo % divisor;

	// muestro el resultado
	alert("El resto es " + resto);
}

/*

entrada:
-Id
Id dividendo: txtIdNumeroDividendo
Id divisor: txtIdNumeroDivisor

proceso:
Operador "%"

salida:
-alert


*/