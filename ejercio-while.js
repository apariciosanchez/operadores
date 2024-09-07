/* oscar mauricio sanchez aparicio U20241028 */

/*  1. Imprimir números del 1 al 10:
Utiliza un ciclo while para imprimir los números del 1 al 10 en la consola. */

/* let numero =0;
while(numero<10){
    console.log("numero es " + numero)
    numero ++;
} */

   /* 2. Sumar los primeros 10 números:
Usa un ciclo do...while para calcular la suma de los números del 1 al 10. */
/*let suma = 0;
let numero = 1;

while (numero < 10) {
  suma += numero;
  console.log("La suma es " + suma);
  numero++; 
} */


/*3. Números pares del 2 al 20:
Utiliza un ciclo while para imprimir los números pares del 2 al 20. */

/* let pares = 2;
do {
    console.log("Los números pares son " + pares);
    pares += 2; 
} while (pares <= 20);*/


/* 4. Contador regresivo:
Crea un contador regresivo desde 10 hasta 1 usando un ciclo do...while.*/

/*let contadorregrivo = 10;
do {
    console.log("La cuenta regresiva es: " + contadorregrivo);
    contadorregrivo--; 
} while (contadorregrivo >= 1); */



 /* 5. Encontrar el primer múltiplo de 7 mayor que 10:
usa un ciclo while para encontrar y mostrar el primer múltiplo de 7 que sea mayor que 10.*/

/*let numero = 11;
while (numero % 7 !== 0) {
    console.log("El primer múltiplo de 7 mayor que 10 es: " + numero);
    numero++; // Incrementa el número
}*/

/* 6. Imprimir números impares hasta 15:
Utiliza un ciclo do...while para imprimir los números impares hasta el 15.*/

/*let impar =1;
do{
    console.log("el numero impar es" + impar);
    impar +=2;
}while(impar <=15);*/

/* 7. Contar cuántas veces aparece un número en un array:
Usa un ciclo while para contar cuántas veces aparece un número específico en un array dado.*/

/*function contarNumeroEnArray(arr, num) {
    let count = 0;
    let num2 = 0;

    while (num2 < arr.length) {
        if (arr[num2] === num) {
            count++;
        }
        num2++;
    }

    return count;
}

const array = [1, 2, 3, 4, 3, 2, 3, 1, 3];
const numero = 3;
const resultado = contarNumeroEnArray(array, numero);

console.log("El número 3 aparece tres veces en el array");*/


/* 8.Sumar todos los elementos de un array:
Usa un ciclo do...while para sumar todos los elementos de un array.*/

/*function sumarElementosArray(arr) {
    let suma = 0;
    let numero = 0;

    do {
        suma += arr[numero];
        numero++;
    } while (numero < arr.length);

    return suma;
}
const array = [1, 2, 3, 4, 5];
const resultado = sumarElementosArray(array);

console.log("La suma de todos los elementos del array es" + resultado); */

/* 9. Generar una secuencia de Fibonacci hasta el número 20:
Utiliza un ciclo while para generar los números de la secuencia de Fibonacci que son menores o iguales a 20.
*/
 
/* let num1 =0;

let num2 =1;

let siguienteNumero;

let limite = 20;

console.log("secuencia de fibonacci:");
console.log(num1);
console.log(num2);

let i =2;
while(i < limite){
     siguienteNumero = num1 + num2;
     console.log(siguienteNumero);

     num1 = num2;
     num2 = siguienteNumero;

     i++;
} */