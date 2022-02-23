/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar 
una carga de datos validada e ingresada por ventanas emergentes solamente 
(para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
 	//definicion de variables
 	var edadIngresada;
 	var sexoIngresado;
 	var estadoCivilIngresado;
    var sueldoIngresado;
    var legajoIngresado;
    var nacionalidadIngresada;

    edadIngresada = prompt ("Ingrese su edad");
    edadIngresada = parseInt(edadIngresada);

    while ((isNaN(edadIngresada) == true) || edadIngresada < 18 || edadIngresada > 90)
    {
        edadIngresada = prompt("Error, su edad edad debe ser entre 18 y 90 años");
        edadIngresada = parseInt(edadIngresada);
    }

    sexoIngresado = prompt ("Ingrese 'M' si su sexo es masculino o 'F' si es femenino");
    sexoIngresado = sexoIngresado.toUpperCase();

    while (!(sexoIngresado == "M" || sexoIngresado == "F"))
    {
        sexoIngresado = prompt ("Error, solo ingrese 'M' si su sexo es masculino o 'F' si es femenino");
        sexoIngresado = sexoIngresado.toUpperCase();
    }

    estadoCivilIngresado = prompt("Ingrese si '1' si usted es 'soltero/a', '2' si es casado/a, '3' si es divorciado/a o '4' si es viudo/a");
    estadoCivilIngresado = parseInt(estadoCivilIngresado);

    while(!(estadoCivilIngresado == 1 || estadoCivilIngresado == 2 || estadoCivilIngresado == 3 || estadoCivilIngresado == 4))
    {
        estadoCivilIngresado = prompt ("Error, solo ingrese '1' si usted es 'soltero/a', '2' si es casado/a, '3' si es divorciado/a o '4' si es viudo/a");
        estadoCivilIngresado = parseInt(estadoCivilIngresado);
    }

    sueldoIngresado = prompt ("Ingrese su sueldo bruto (solo numero)");
    sueldoIngresado = parseInt(sueldoIngresado);

    while ((isNaN(sueldoIngresado) == true) || sueldoIngresado < 8000)
    {
        sueldoIngresado = prompt ("Error, su sueldo bruto no debe ser menor a 8000, solo ingrese numeros");
        sueldoIngresado = parseInt(sueldoIngresado);
    }

    do
    {
        legajoIngresado = prompt ("Ingrese su legajo de cuatro digitos");
        legajoIngresado = parseInt(legajoIngresado);
    } while ((isNaN(legajoIngresado) == true) || legajoIngresado < 1000 || legajoIngresado > 9999);

    nacionalidadIngresada = prompt ("Ingrese 'A' si usted es Argentino, 'E' si usted es extranjero o 'N' si usted es nacionalizado");
    nacionalidadIngresada = nacionalidadIngresada.toUpperCase();

    while (!(nacionalidadIngresada == "A" || nacionalidadIngresada == "E" || nacionalidadIngresada == "N"))
    {
        nacionalidadIngresada = prompt ("Error, solo ingrese 'A' si usted es Argentino, 'E' si usted es extranjero o 'N' si usted es nacionalizado");
        nacionalidadIngresada = nacionalidadIngresada.toUpperCase();
    } 

    document.getElementById("txtIdEdad").value = ("Su edad es " + edadIngresada);

    if (sexoIngresado == "M")
    {
        document.getElementById("txtIdSexo").value = ("Masculino");
    }
    else
    {
        document.getElementById("txtIdSexo").value = ("Femenino");
    }

    
    switch (estadoCivilIngresado)
    {
        case 1:
            estadoCivilIngresado = "Soltero/a";
            break;
        case 2:
            estadoCivilIngresado = "Casado/a";
            break;
        case 3:
            estadoCivilIngresado = "Divorciado/a";
            break;
        default:
            estadoCivilIngresado = "Viudo/a";   
    }

    document.getElementById("txtIdEstadoCivil").value = (estadoCivilIngresado);
    
    document.getElementById("txtIdSueldo").value = ("Sueldo bruto es " + sueldoIngresado);

    document.getElementById("txtIdLegajo").value = (legajoIngresado);

    switch (nacionalidadIngresada)
    {
        case "A":
            nacionalidadIngresada = "Argentino/a";
            break;
        case "E":
            nacionalidadIngresada = "Extranjero/a";
            break;
        default:
            nacionalidadIngresada = "Nacionalizado/a";
    }   
   
    document.getElementById("txtIdNacionalidad").value = (nacionalidadIngresada);
    
}

/*
Edad : txtIdEdad
Sexo: txtIdSexo
Estado civil: txtIdEstadoCivil
Sueldo: txtIdSueldo
Legajo: txtIdLegajo
Nacionalidad: txtIdNacionalidad
*/