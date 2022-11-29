/**
 * Ejercicio: Leer un número entero y determinar si tiene 3 dígitos.

 * length: Cuenta el numero de caracteres de una variable, string y array
 * toString = Convierte un entero a cadena
 */

let entero = 123;
let cadena = entero.toString();

if(cadena.length == 3){
    console.log("El numero entero tiene 3 digitos");
}else{
    console.log("El número entero no tiene 3 digitos, tiene " + cadena.length);
}





