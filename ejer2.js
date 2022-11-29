/**
 * if-else if-else
 *2.En un cierto país el impuesto que se debe pagar por artículos 
 importados se calcula mediante las siguientes reglas:
 --------------------------------------
 $0.00 a $20.00 --- no genera impuesto -
 $500.01 en adelante ----- 30%         -
 $20.01 a $40.00 --- ------40%         -
 $40.01 a $500.00 --- -----50%         -
 ---------------------------------------
 */

let precio;
let calculo = 0;
precio = 19.20;
if(precio > 20 && precio <= 40){
    calculo = precio * 0.30;
    console.log("Precio del articulo " + precio + "\n" + 
                "Impuesto a pagar " + calculo + "\n" +
                "El impuesto es del 30%");
}else if(precio > 40 && precio <= 500){
    calculo = precio * 0.40;
    console.log("Precio del articulo " + precio + "\n" + 
                "Impuesto a pagar " + calculo + "\n" +
                "El impuesto es del 40%");
}else if(precio > 500){
    calculo = precio * 0.50;
    console.log("Precio del articulo " + precio + "\n" + 
                "Impuesto a pagar " + calculo + "\n" +
                "El impuesto es del 50%");
}else{
    console.log("El precio del articulo no genera impuestos" + "\n" +
                "Precio del articulo " + precio);
}