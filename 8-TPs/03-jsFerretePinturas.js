/*3.
Sbernini Agustin DIV E
E/S tp3
	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	
	var temperaturaEnFahrenheit;
	var resultadoEnCentigrados;

	temperaturaEnFahrenheit = document.getElementById("txtIdTemperatura").value;
	temperaturaEnFahrenheit = parseInt(temperaturaEnFahrenheit);

	resultadoEnCentigrados = (temperaturaEnFahrenheit - 32) * 5/9;

	alert("La temperatura en Centigrados es de " + resultadoEnCentigrados + " °C");

}

function CentigradosFahrenheit () 
{
	
	var temperaturaEnCentigrados;
	var resultadoEnFahrenheit;

	temperaturaEnCentigrados = document.getElementById("txtIdTemperatura").value;
	temperaturaEnCentigrados = parseInt(temperaturaEnCentigrados);

	resultadoEnFahrenheit = (temperaturaEnCentigrados * 9/5) + 32;

	alert("La temperatura en Farenheit es de " + resultadoEnFahrenheit + " °F");

}
