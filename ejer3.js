/**
 * Estructura switch
 * 
 * Math.abs() = valor absoluto del entero
 */

let clave;
let minutos;
let tarifa = 0;
clave = 25;
minutos = 90;

switch(clave){
    case 12:
        tarifa = minutos * 2.00;
        if(minutos < 30){
            tarifa = (tarifa * 0.10) - tarifa;
            console.log("Zona: America del Norte" + "\n" +
                        "Numero de minutos: " + minutos + "\n" +
                        "Tarifa: " + Math.abs(tarifa));
        }else{
            console.log("Zona: America del Norte" + "\n" +
                        "Numero de minutos: " + minutos + "\n" +
                        "Tarifa: " + tarifa);
        }
        break;
    case 15:
        tarifa = minutos * 2.20;
        if(minutos < 30){
            tarifa = (tarifa * 0.10) - tarifa;
            console.log("Zona: America Central" + "\n" +
                        "Numero de minutos: " + minutos + "\n" +
                        "Tarifa: " + Math.abs(tarifa));
        }else{
            console.log("Zona: America Central" + "\n" +
                        "Numero de minutos: " + minutos + "\n" +
                        "Tarifa: " + tarifa);
        }
        break;
    case 18:
        tarifa = minutos * 4.50;
        if(minutos < 30){
            tarifa = (tarifa * 0.10) - tarifa;
            console.log("Zona: America del Sur" + "\n" +
                        "Numero de minutos: " + minutos + "\n" +
                        "Tarifa: " + Math.abs(tarifa));
        }else{
            console.log("Zona: America del Sur" + "\n" +
                        "Numero de minutos: " + minutos + "\n" +
                        "Tarifa: " + tarifa);
        }
        break;
    case 19:
        tarifa = minutos * 3.50;
        if(minutos < 30){
            tarifa = (tarifa * 0.10) - tarifa;
            console.log("Zona: Europa" + "\n" +
                        "Numero de minutos: " + minutos + "\n" +
                        "Tarifa: " + Math.abs(tarifa));
        }else{
            console.log("Zona: Europa" + "\n" +
                        "Numero de minutos: " + minutos + "\n" +
                        "Tarifa: " + tarifa);
        }
        break;
    case 23:
        tarifa = minutos * 6.00;
        if(minutos < 30){
            tarifa = (tarifa * 0.10) - tarifa;
            console.log("Zona: Asia" + "\n" +
                        "Numero de minutos: " + minutos + "\n" +
                        "Tarifa: " + Math.abs(tarifa));
        }else{
            console.log("Zona: Asia" + "\n" +
                        "Numero de minutos: " + minutos + "\n" +
                        "Tarifa: " + tarifa);
        }
        break;
    case 25:
        tarifa = minutos * 6.00;
        if(minutos < 30){
            tarifa = (tarifa * 0.10) - tarifa;
            console.log("Zona: Africa" + "\n" +
                        "Numero de minutos: " + minutos + "\n" +
                        "Tarifa: " + Math.abs(tarifa));
        }else{
            console.log("Zona: Africa" + "\n" +
                        "Numero de minutos: " + minutos + "\n" +
                        "Tarifa: " + tarifa);
        }
        break;
    case 29:
        tarifa = minutos * 5.00;
        if(minutos < 30){
            tarifa = (tarifa * 0.10) - tarifa;
            console.log("Zona: Oceania" + "\n" +
                        "Numero de minutos: " + minutos + "\n" +
                        "Tarifa: " + Math.abs(tarifa));
        }else{
            console.log("Zona: Oceania" + "\n" +
                        "Numero de minutos: " + minutos + "\n" +
                        "Tarifa: " + tarifa);
        }
        break;
}