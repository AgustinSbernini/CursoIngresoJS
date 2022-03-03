function mostrar()
{
  var producto;
  var precio;
  var cantBolsas;
  var contadorBolsas = 0;
  var descuento;
  var totalAPagar = 0;
  var totalConDescuento;
  var cantArena = 0;
  var cantCal = 0;
  var cantCemento = 0;
  var cementoMasCaro = 0;
  var calMasCaro = 0;
  var arenaMasCaro = 0;
  var respuesta ="si";
  var mensajeMasCant;
  var mensajesMasCaro;

  while (respuesta == "si")
  {

    producto = prompt ("Ingrese el producto");
    producto = producto.toLowerCase();

    while (producto != "cal" && producto != "arena" && producto != "cemento")
    {
      producto = prompt("Error, ingrese un producto valido");
      producto = producto.toLowerCase();
    }

    do
    {
    cantBolsas = prompt("Ingrese la cantidad de bolsas");
    cantBolsas = parseInt(cantBolsas)
    } while (isNaN(cantBolsas));

    contadorBolsas = contadorBolsas + cantBolsas;

    do
    {
    precio = prompt("Ingrese el precio");
    precio = parseInt(precio)
    } while (isNaN(precio));

    totalAPagar = totalAPagar + precio;

    if (producto == "cal")
    {
      cantCal = cantCal + cantBolsas;
      if (precio > calMasCaro)
      {
        calMasCaro = precio;
      }
    }
    else
    {
      if (producto == "arena")
      {
        cantArena = cantArena + cantBolsas;
        if (precio > arenaMasCaro)
        {
          arenaMasCaro = precio;
        }
      }
      else
      {
        cantCemento = cantCemento + cantBolsas;
        if (precio > cementoMasCaro)
        {
          cementoMasCaro = precio;
        }
      }
    }

    respuesta = prompt("Desea seguir agregando productos? Responda 'si' o 'no'")
    respuesta = respuesta.toLowerCase();
    while(respuesta != "si" && respuesta != "no")
    {
      respuesta =prompt("Error, desea continuar? Responda 'si' o 'no'")
      respuesta = respuesta.toLowerCase();
    }
  }

  

  if (contadorBolsas > 30)
  {
    descuento = 0.25;
  }
  else
  {
    if (contadorBolsas > 10)
    {
      descuento = 0.15;
    }
    else
    {
      descuento = 0;
    }
  }

  

  if (cantCal >= cantArena && cantCal >= cantCemento)
  {
    mensajeMasCant = "La mayor cantidad de bolsas se compraron de Cal";
  }
  else
  {
    if (cantCemento >= cantArena && cantCemento >= cantCal)
    {
      mensajeMasCant = "La mayor cantidad de bolsas se compraron de Cemento";
    }
    else
    {
      mensajeMasCant = "La mayor cantidad de bolsas se compraron de Arena";
    }
  }

 

  if (cementoMasCaro >= arenaMasCaro && cementoMasCaro >= calMasCaro)
  {
    mensajesMasCaro = "El tipo más caro que se vendió fue Cemento";
  }
  else
  {
    if (arenaMasCaro >= cementoMasCaro && arenaMasCaro >= calMasCaro)
    {
      mensajesMasCaro = "El tipo más caro que se vendió fue Arena";
    }
    else
    {
      mensajesMasCaro = "El tipo más caro que se vendió fue Cal";
    }
  }

  if (descuento == 0)
  {
    document.write("No hubo descuento en la compra" + "<br>");
  }
  else
  {
    document.write("El descuento aplicado fue de " + (descuento * 100) + "% y en total se pagó " + (totalAPagar * (1 - descuento)) + "<br>" );
  }

  document.write(mensajesMasCaro + "<br>");

  document.write("El total a pagar sin descuento es " + totalAPagar + "<br>");

  document.write(mensajeMasCant + "<br>");






}
