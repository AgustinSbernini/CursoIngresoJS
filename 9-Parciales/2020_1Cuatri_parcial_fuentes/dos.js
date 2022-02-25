/* No corresponde al html, fue otro modelo de examen
Sbernini Agustin
2. Se necesita llevar el registro de un vacunatorio. Para ello se podrá registrar los datos de las
personas vacunadas mientras el usuario quiera.
De cada vacunado se solicita:
Nombre
Edad (mayor o igual a 12)
Vacuna (“rusa”, “china”, “americana”)
Si la edad esta entre 12 y 17 años ambos incluidos solo se permite la vacuna americana
Dosis (“P” en caso de ser la primera dosis o “S” en caso de ser la segunda dosis)
Genero (Femenino, Masculino)
Informar:
a- Promedio de edad de los que se vacunaron con la china.
b- Nombre y vacuna del masculino más joven.
c- De las personas que recibieron la vacuna americana que porcentaje son menores de edad
d- Porcentaje de los que están vacunados con 1 dosis sobre el total de vacunados
e- Vacuna más inoculada
*/

function mostrar()
{
  var nombre;
  var edad;
  var vacuna;
  var dosis;
  var genero;
  var promedioEdadChina;
  var sumaEdadChina = 0;
  var vacunaMasJoven = 0;
  var nombreMasJoven = 0;
  var edadMasJoven;
  var americanaMenoresEdad = 0;
  var americanaTotal = 0;
  var americanaMayoresEdad = 0;
  var americanaPorcentajeMenoresEdad;
  var chinaTotal = 0;
  var rusaTotal = 0;
  var totalVacunados = 0;
  var totalPrimeraDosis = 0;
  var porcentajePrimeraDosis;
  var vacunaInoculadaC;
  var vacunaInoculadaR;
  var vacunaInoculadaA;
  var contador = 0;
  var respuesta = "si";

  while (respuesta == "si")
  {

    nombre = prompt("Ingrese el nombre del paciente");

    edad = prompt("Ingrese la edad. Mayor o igual a 12");
    edad = parseInt(edad);

    while (edad < 12)
    {
      edad = prompt("Error, ingrese la edad. Tiene que ser mayor o igual a 12");
      edad = parseInt(edad);
    }

    vacuna = prompt("Ingrese la vacuna aplicada");
    vacuna = vacuna.toLowerCase();

    if (edad < 18 && edad > 11)
    {
      while (vacuna != "americana")
      {
        vacuna = prompt ("Error, para menores de edad solo vacuna 'americana'")
        vacuna = vacuna.toLowerCase();
      }
    }
    else
    {
    while (vacuna != "rusa" && vacuna != "americana" && vacuna != "china")
    {
      vacuna = prompt("Error, ingrese una vacuna valida, 'rusa', 'americana' o 'china'");
      vacuna = vacuna.toLowerCase();
    }
    }

    if (vacuna == "americana")
      {
        if (edad < 18)
        {
          americanaMenoresEdad = americanaMenoresEdad + 1;
        }
        else
        {
        americanaMayoresEdad = americanaMayoresEdad + 1;
        }
      }
      else if (vacuna == "rusa")
      {
        rusaTotal = rusaTotal + 1;
      }
      else
      {
        sumaEdadChina = sumaEdadChina + edad;
        chinaTotal = chinaTotal + 1;
      }

    dosis = prompt("Ingrese 'P' para primera dosis o 'S' para segunda dosis");
    dosis = dosis.toLowerCase();

    while (dosis != "p" && dosis != "s")
    {
      dosis = prompt("Error, solo ingrese 'P' o 'S'");
      dosis = dosis.toLowerCase();
    }

    genero = prompt("Ingrese si es 'masculino' o 'femenino'");
    genero = genero.toLowerCase();

    while (genero != "masculino" && genero != "femenino")
    {
      genero = prompt("Error, solo ingrese 'masculino' o 'femenino'");
      genero = genero.toLowerCase();
    }


    if (genero == "masculino" && contador == 0)
    {
      nombreMasJoven = nombre;
      vacunaMasJoven = vacuna;
      edadMasJoven = edad;
      contador = contador + 1;
    }
    else
    {
      if (genero == "masculino" && edad < edadMasJoven)
      {
        nombreMasJoven = nombre;
        vacunaMasJoven = vacuna;
        edadMasJoven = edad;
      }
    }

    if (dosis == "p")
    {
      totalPrimeraDosis = totalPrimeraDosis + 1;
    }

    totalVacunados = totalVacunados + 1;

    respuesta = prompt ("Desea continuar agregando datos? Responda 'si' o 'no'");
    respuesta = respuesta.toLowerCase();

    while (respuesta != "si" && respuesta != "no")
    {
      respuesta = prompt("Error, desea continuar? Responda 'si' o 'no'");
      respuesta = respuesta.toLowerCase();
    }

  }

  promedioEdadChina = sumaEdadChina / chinaTotal;
  americanaTotal = americanaMayoresEdad + americanaMenoresEdad;
  americanaPorcentajeMenoresEdad = americanaMenoresEdad / americanaTotal * 100;
  porcentajePrimeraDosis = totalPrimeraDosis / totalVacunados * 100;

  if (isNaN(promedioEdadChina))
  {
    promedioEdadChina = 0;
  }
  if (isNaN(americanaPorcentajeMenoresEdad))
  {
    americanaPorcentajeMenoresEdad = 0;
  }
  if (isNaN(porcentajePrimeraDosis))
  {
    porcentajePrimeraDosis = 0;
  }

  if (rusaTotal >= chinaTotal && rusaTotal >= americanaTotal)
  {
    vacunaInoculadaR = "rusa";
  }
  else
  {
    vacunaInoculadaR = " ";
  }
  if (chinaTotal >= rusaTotal && chinaTotal >= americanaTotal)
  {
    vacunaInoculadaC = "china";
  }
  else
  {
    vacunaInoculadaC = " ";
  }
  if (americanaTotal >= rusaTotal && americanaTotal >= chinaTotal)
  {
    vacunaInoculadaA = "americana";
  }
  else
  {
    vacunaInoculadaA = " ";
  }

  if (nombreMasJoven == 0 && vacunaMasJoven == 0)
  {
    document.write("No se han vacunado hombres" + "<br>");
  }
  else
  {
    document.write("El nombre del masculino mas joven vacunado es " + nombreMasJoven + " y su vacuna es " + vacunaMasJoven + "<br>");
  }

  document.write("El promedio de edad de los vacunados con la china es " + promedioEdadChina + "<br>");

  document.write("De las personas vacunadas con la vacuna americana un " + americanaPorcentajeMenoresEdad + "% es menor de edad" + "<br>");

  document.write("Del total de vacunados un " + porcentajePrimeraDosis + "% son con la primera dosis" + "<br>");

  document.write("La/s vacuna/s más inoculada/s es/son " + vacunaInoculadaA + " " + vacunaInoculadaC + " " + vacunaInoculadaR + "<br>");
}