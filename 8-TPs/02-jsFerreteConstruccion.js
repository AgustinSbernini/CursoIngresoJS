/*2.
Sbernini Agustin DIV E
E/S tp2
	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{

	var largo;
	var ancho;
	var radio;
	var perimetro;
	var cantidadDeHilos;

	largo = document.getElementById("txtIdLargo").value;
	ancho = document.getElementById("txtIdAncho").value;
	radio = document.getElementById("txtIdRadio").value;

	largo = parseInt(largo);
	ancho = parseInt(ancho);

	perimetro = (largo * 2 + ancho * 2 );
	perimetro = parseInt(perimetro);
	cantidadDeHilos = (perimetro * 3);


	alert("El perimetro de su terreno es de " + perimetro + " cm y se debe alambrar con " + cantidadDeHilos + " metros de hilos de alambres");


}
function Circulo () 
{
	
	var largo;
	var ancho;
	var radio;
	var perimetro;
	var cantidadDeHilos;

	largo = document.getElementById("txtIdLargo").value;
	ancho = document.getElementById("txtIdAncho").value;
	radio = document.getElementById("txtIdRadio").value;

	radio = parseInt(radio);

	perimetro = (radio * 2 * 3.14 );
	perimetro = parseInt(perimetro);
	cantidadDeHilos = (perimetro * 3 );


	alert("El diametro de su terreno es de " + perimetro + " metros y se debe alambrar con "+ cantidadDeHilos +" metros de alambres");


}
function Materiales () 
{
	
	var largo;
	var ancho;
	var radio;
	var cemento;
	var cal;

	largo = document.getElementById("txtIdLargo").value;
	ancho = document.getElementById("txtIdAncho").value;
	radio = document.getElementById("txtIdRadio").value;

	largo = parseInt(largo);
	ancho = parseInt(ancho);

	cemento = (largo * ancho) * 2;
	cal = (largo * ancho) * 3;

	alert("Para hacer su contrapiso necesita " + cemento + " bolsas de cemento y " + cal + " bolsas de cal");

}