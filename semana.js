/*Ejercicio 3: Determinar el Día de la Semana
Descripción:
Escribe un programa que tome un número del 1 al 7 como entrada (donde 1 es Lunes y 7 es Domingo) y muestre el día correspondiente de la semana.

Por ejemplo:

Si el usuario ingresa 1, el programa debería mostrar "Lunes".
Si el usuario ingresa 5, el programa debería mostrar "Viernes".
Recomendación: Utiliza la estructura switch.*/

let day = 4;
let dayname;

switch (day) {
 case 0:
     dayname = "lunes"
    break;
 case 1:
     dayname = "martes"
    break;
 case 2:
     dayname = "miercoles"
    break;
 case 3:
     dayname = "jueves"
     break;
 case 4:
     dayname = "viernes"
    break;
 case 5:
     dayname = "sabado"
    break;
 case 6:
     dayname = "domingo"
    break;
 default:
 dayname = "Dia invalido"  
}
console.log(dayname);