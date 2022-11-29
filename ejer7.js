/**7.Elaborar un algoritmo para leer la nota de diez 
 * estudiantes y mostrar cantidad de aprobados y reprobados.
*/

const array = [6,7,8,9,10,3,5,5,4];
let contAprob = 0;
let contReprob = 0;
array.forEach(value => {
    if(value >= 7){
        contAprob++;
        console.log(value);
    }
    else
        contReprob++
})
console.log("Total de APROBADOS: " + contAprob);
console.log("Total de REPROBADOS: " + contReprob);
