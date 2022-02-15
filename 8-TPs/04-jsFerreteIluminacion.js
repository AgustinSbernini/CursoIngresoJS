/*4.	
Sbernini Agustin DIV E
E/S tp4
Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{

    var cantLamparas = document.getElementById("txtIdCantidad").value;
    cantLamparas = parseInt(cantLamparas);
    var marca = document.getElementById("Marca").value;
    var resultado;
    var impuesto;

/*  opción solo if
    if (cantLamparas > 5) 
    {
        resultado = ((cantLamparas * 35) * 0.5);
    }
    else if (cantLamparas == 5)
    {
        if (marca == "ArgentinaLuz")
        {
            resultado = (cantLamparas * 35 * 0.6);
        }
        else
        {
            resultado = (cantLamparas * 35 * 0.7);
        }
    }
    else if (cantLamparas == 4)
    {
        if (marca == "ArgentinaLuz" || marca == "FelipeLamparas")
        {
            resultado = (cantLamparas * 35 * 0.75);
        }
        else
        {
            resultado = (cantLamparas * 35 * 0.8);
        }
    }
    else if (cantLamparas == 3)
    {
        if (marca == "ArgentinaLuz")
        {
            resultado = (cantLamparas * 35 * 0.85);
        }
        else if ( marca == "FelipeLamparas")
        {
            resultado = (cantLamparas * 35 * 0.9);
        }
        else
        {
            resultado = (cantLamparas * 35 * 0.95);
        }
    }
    else
    {
        resultado = (cantLamparas * 35);
    }

    resultado = resultado.toFixed(2);

    if (resultado > 120)
    {
        document.getElementById("txtIdprecioDescuento").value = ("$" + (resultado * 1.1) +" y de IIBB usted pago $" + (resultado * 0.1));
    }
    else
    {
        document.getElementById("txtIdprecioDescuento").value = ("$" + resultado);
    }
*/
/* opción if/switch

    if (cantLamparas > 5)
    {
        resultado = ((cantLamparas * 35) * 0.5);
    }
    else if (cantLamparas == 5)
    {
        switch (marca)
        {  
            case "ArgentinaLuz":
                resultado = (cantLamparas * 35 * 0.6);
                break;

            default:
                resultado = (cantLamparas * 35 * 0.7);
        }
    }
    else if (cantLamparas == 4)
    {
        switch (marca)
        {
            case "ArgentinaLuz":
            case "FelipeLamparas":
                resultado = (cantLamparas * 35 * 0.75);
                break;
        
            default:
                resultado = (cantLamparas * 35 * 0.8);
        }
    }
    else if (cantLamparas == 3)
    {
        switch (marca)
        {
            case "ArgentinaLuz":
                resultado = (cantLamparas * 35 * 0.85);
                break;

            case "FelipeLamparas":
                resultado = (cantLamparas * 35 * 0.9);
                break;   

            default:
                resultado = (cantLamparas * 35 * 0.95);
        }
    }
    else
    {
        resultado = (cantLamparas * 35);
    }

    resultado = resultado.toFixed(2);

    if (resultado > 120)
    {
        document.getElementById("txtIdprecioDescuento").value = ("$" + (resultado * 1.1) +" y de IIBB usted pago $" + (resultado * 0.1));
    }
    else
    {
        document.getElementById("txtIdprecioDescuento").value = ("$" + resultado);
    }
*/
/* solo switch */

    switch (cantLamparas)
    {
        case 5:
            {
                switch (marca)
                {
                    case "ArgentinaLuz":
                        resultado = (cantLamparas * 35 * 0.6);
                        break;
                        
                    default:
                        resultado = (cantLamparas * 35 * 0.7);
                }
            }
            break;

        case 4:
            {
                switch (marca)
                {
                    case "ArgentinaLuz":
                    case "FelipeLamparas":
                        resultado = (cantLamparas * 35 * 0.75);
                        break;

                    default:
                        resultado = (cantLamparas * 35 * 0.8);
                }
            }
            break;

        case 3:
            {
                switch (marca)
                {
                    case "ArgentinaLuz":
                        resultado = (cantLamparas * 35 * 0.85);
                        break;   

                    case "FelipeLamparas":
                        resultado = (cantLamparas * 35 * 0.9);
                        break;

                    default:
                        resultado = (cantLamparas * 35 * 0.95);
                }
            }
            break;

        case 2:
        case 1:
            resultado = (cantLamparas * 35);
            break;

        default:
            resultado = (cantLamparas * 35 * 0.5);
    }

    resultado = resultado.toFixed(2);

    if (resultado > 120)
    {
        document.getElementById("txtIdprecioDescuento").value = ("$" + (resultado * 1.1) +" y de IIBB usted pago $" + (resultado * 0.1));
    }
    else
    {
        document.getElementById("txtIdprecioDescuento").value = ("$" + resultado);
    }

}

/*

entrada:
-Id
id cantLamparas : txtIdCantidad
id marca : Marca

proceso:
if - else if
operadores racionales > ==
operadores logicos ||
.toFixed(2) para acordar los decimales a 2

salida:
-Id
id descuento : txtIdprecioDescuento

*/