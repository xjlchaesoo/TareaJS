/**
 * 8.Elabore un algoritmo con un menú simple con las cuatro operaciones básicas:
 *  sumar, restar, multiplicar, dividir.
 */
let clave;
let a = 7
let b = 7
clave = 3;

console.log("--------MENU--------\n" +
            "1--SUMAR A Y B  \n" +
            "2--RESTAR A Y B  \n" +
            "3--MULTIPLICAR A Y B  \n" +
            "4--DIVIDIR A Y B  \n \n");
switch(clave){
    case 1:        
        console.log("El resultado de Sumar a + b = " + (a+b));
        
        break;
    case 2:        
        console.log("El resultado de Restar a - b = " + (a-b));
    
    break;
    case 3:        
        console.log("El resultado de Multiplicar a * b = " + (a*b));
    
    break;
    case 4:        
        console.log("El resultado de Dividir a % b = " + (a/b));
    break;
}