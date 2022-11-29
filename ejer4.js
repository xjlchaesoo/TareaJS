/**
 * Escriba un programa que muestre la tabla de 
 * multiplicar del 1 al 10 del número ingresado por el usuario.
 * 
 * Estructura repetitiva
 * for, while, do while
 * foreach = solo trabaja con arreglos
 * este ejercicio lo resolvimos de 3 maneras
 */

let tabla = 7;
let result;
console.log("Usando la estructura FOR");
console.log("Tabla del: " + tabla);
for(let i=1; i <= 10; i++){ 
    result = tabla * i;
    
    console.log(tabla + "x" + i + "=" + result);
}
console.log("Usando la estructura WHILE");
console.log("Tabla del: " + tabla);
let k = 1;
while(k <= 10){
    result = tabla * k;
    console.log(tabla + "x" + k + "=" + result);
    k++;
}

console.log("Usando la estructura DO-WHILE");
console.log("Tabla del: " + tabla);
let j = 1;
do{
    result = tabla * j;
    console.log(tabla + "x" + j + "=" + result);
    j++;
}while(j <= 10)


