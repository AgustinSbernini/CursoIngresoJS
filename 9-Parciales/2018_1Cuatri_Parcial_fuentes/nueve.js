function mostrar()
{
	var marca;
	var peso;
	var temp;
	var cantTempPares = 0;
	var marcaMasPesada;
	var prodBajoCero = 0;
	var sumaPeso = 0;
	var pesoPromedio;
	var pesoMaximo;
	var pesoMinimo;
	var cantProd = 0;
	var respuesta = "si";

	while (respuesta == "si")
	{

		marca = prompt("Ingrese la marca del producto");

		peso = prompt("Ingrese el peso del producto, entre 1 y 100");
		peso = parseInt (peso);
		
		while (isNaN(peso) || peso < 1 || peso > 100)
		{
			peso = prompt ("Error, ingrese el peso del producto entre 1 y 100, sin letras");
			peso = parseInt(peso);
		}

		temp = prompt("Ingrese la temperatura de almacenamiento, entre -30 y 30 ");
		temp = parseInt(temp);

		while (isNaN(temp) || temp < -30 || temp > 30)
		{
			temp = prompt ("Error, ingrese la temperatura de almacenamiento, entre -30 y 30, sin letras");
			temp = parseInt(temp);
		}

		if ((temp % 2) == 0)
		{
			cantTempPares = cantTempPares + 1;
		}

		if (cantProd == 0)
		{
			marcaMasPesada = marca;
			pesoMaximo = peso;
			pesoMinimo = peso;
		}
		else if (pesoMinimo > peso)
		{
			pesoMinimo = peso;
		}
		else if (pesoMaximo < peso)
		{
			pesoMaximo = peso;
			marcaMasPesada = marca;
		}

		if (temp < 0)
		{
			prodBajoCero = prodBajoCero + 1;
		}

		sumaPeso = sumaPeso + peso;
		cantProd = cantProd + 1;

		respuesta = prompt("Desea seguir agregando productos? Conteste 'si' o 'no'");
		respuesta = respuesta.toLowerCase();

		while ((respuesta != "si" && respuesta != "no"))
		{
		 	respuesta = prompt("Error, desea continuar? Responda 'si' o 'no'")
			respuesta = respuesta.toLowerCase();
		}
	
	}

	pesoPromedio = sumaPeso / cantProd;

	document.write("La cantidad de temperatura pares es " + cantTempPares + "<br>");
	document.write("La marca del producto mas pesado es " + marcaMasPesada + "<br>");
	document.write("La cantidad de productos que se conservan a menos de 0 grados es " + prodBajoCero + "<br>");
	document.write("El promedio de todos los pesos es " + pesoPromedio + "<br>");
	document.write("El peso maximo es " + pesoMaximo + " y el peso minimo es " + pesoMinimo + "<br>");
}