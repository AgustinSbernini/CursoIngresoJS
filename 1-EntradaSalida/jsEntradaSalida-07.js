/*
Sbernini Agustin DIV E
E/S ej7
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	

	// declaro las variables
	var numeroUno = document.getElementById("txtIdNumeroUno").value;
	var numeroDos = document.getElementById("txtIdNumeroDos").value;
	var resultado;

	// se hace el parseInt para convertir el texto en numero
	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);

	// se realiza la operacion
	resultado = numeroUno + numeroDos;

	// se muestra el resultado
	alert("La suma es " + resultado);

}

function restar()
{

	// declaro las variables
	var numeroUno = document.getElementById("txtIdNumeroUno").value;
	var numeroDos = document.getElementById("txtIdNumeroDos").value;
	var resultado;

	// se hace el parseInt para convertir el texto en numero
	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);

	// se realiza la operacion
	resultado = numeroUno - numeroDos;

	// se muestra el resultado
	alert("La resta es " + resultado);	

}

function multiplicar()
{ 

	// declaro las variables
	var numeroUno = document.getElementById("txtIdNumeroUno").value;
	var numeroDos = document.getElementById("txtIdNumeroDos").value;
	var resultado;

	// se hace el parseInt para convertir el texto en numero
	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);

	// se realiza la operacion
	resultado = numeroUno * numeroDos;

	// se muestra el resultado
	alert("La multiplicacion es " + resultado);	

}

function dividir()
{

	// declaro las variables
	var numeroUno = document.getElementById("txtIdNumeroUno").value;
	var numeroDos = document.getElementById("txtIdNumeroDos").value;
	var resultado;

	// se hace el parseInt para convertir el texto en numero
	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);

	// se realiza la operacion
	resultado = numeroUno / numeroDos;

	// se muestra el resultado
	alert("La division es " + resultado);	

}

/*

entrada:
-Id
Id numero uno: txtIdNumeroUno
Id numero dos: txtIdNumeroDos

proceso:
-suma
operadores "+", "-", "*", "/"

salida:
-alert

*/