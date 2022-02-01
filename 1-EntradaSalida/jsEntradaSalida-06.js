/*
Sbernini Agustin DIV E
E/S ej6
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{

	// declaramos variables
	var numeroUno;
	var numeroDos;
	var resultado;

	numeroUno = document.getElementById("txtIdNumeroUno").value;
	numeroDos = document.getElementById("txtIdNumeroDos").value;

	// parseInt para convertir los valores de textos en valores numericos enteros.
	// parseFloat para convertir valores numericos decimales.
	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);

	// realiazo la suma
	resultado = numeroUno + numeroDos;

	// muestro la suma
	alert("La suma es " + resultado);

}

/*

entrada:
-Id
Id numero uno: txtIdNumeroUno
Id numero dos: txtIdNumeroDos

proceso:
-suma
Operador "+"

salida:
-alert

*/