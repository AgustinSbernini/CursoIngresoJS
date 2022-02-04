/*1.
Sbernini Agustin DIV E
E/S tp1
	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	
	var precioUno;
	var precioDos;
	var precioTres;
	var resultado;

	precioUno = document.getElementById("txtIdPrecioUno").value;
	precioDos = document.getElementById("txtIdPrecioDos").value;
	precioTres = document.getElementById("txtIdPrecioTres").value;

	precioUno = parseFloat(precioUno);
	precioDos = parseFloat(precioDos);
	precioTres = parseFloat(precioTres);

	resultado = (precioUno + precioDos + precioTres);

	alert("La suma es " + resultado);


}
function Promedio () 
{
	
	var precioUno;
	var precioDos;
	var precioTres;
	var resultado;

	precioUno = document.getElementById("txtIdPrecioUno").value;
	precioDos = document.getElementById("txtIdPrecioDos").value;
	precioTres = document.getElementById("txtIdPrecioTres").value;

	precioUno = parseFloat(precioUno);
	precioDos = parseFloat(precioDos);
	precioTres = parseFloat(precioTres);

	resultado = ((precioUno + precioDos + precioTres) / 3);

	alert("El promedio es " + resultado);

}
function PrecioFinal () 
{
	
	var precioUno;
	var precioDos;
	var precioTres;
	var suma;
	var resultado;
	var iva;

	precioUno = document.getElementById("txtIdPrecioUno").value;
	precioDos = document.getElementById("txtIdPrecioDos").value;
	precioTres = document.getElementById("txtIdPrecioTres").value;

	precioUno = parseFloat(precioUno);
	precioDos = parseFloat(precioDos);
	precioTres = parseFloat(precioTres);

	suma = (precioUno+precioDos+precioTres);
	iva = suma * 0.21;

	resultado = suma + iva;

	alert("El precio final es " + resultado);

}