/* Crea una función que reciba dos números y devuelva su suma 
 function suma(a,b){
    console.log(a+b)
}
suma(4,12) */

/* Función que recibe un array de números y devuelve el mayor de ellos
function numMayorArray(numeros) {
    let mayor = numeros[0]; 

    for (let i = 1; i < numeros.length; i++) {
        if (numeros[i] > mayor) {
            mayor = numeros[i]; 
        }
    }

    return mayor; 
}

let numeros = [23, 89, 12, 56, 99, 34];
console.log(`El número mayor es: ${numMayorArray(numeros)}`); */



 /* crea una función que reciba un string y devuelve el número de vocales que contiene 


// Función que recibe un string y devuelve el número de vocales
function contarVocales(cadena) {
    let contador = 0;
    const vocales = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

    for (let i = 0; i < cadena.length; i++) {
        if (vocales.includes(cadena[i])) {
            contador++;
        }
    }

    return contador; 
}

let texto = " mauricio sanchez";
console.log(`El número de vocales en el texto es: ${contarVocales(texto)}`); */


 /* Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas

function convertirAMayusculas(arrayDeStrings) {
    let nuevoArray = arrayDeStrings.map(function(cadena) {
        return cadena.toUpperCase(); 
    });

    return nuevoArray;
}

let strings = ["hola", "mundo"];
let stringsMayusculas = convertirAMayusculas(strings);
console.log(stringsMayusculas); */

/* Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario */

// Función que recibe un número y devuelve true si es primo, false en caso contrario
function esPrimo(numero) {
    if (numero <= 1) {
    }

    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) {
        
        }
    }

}

let numero = 21;
console.log(`El número ${numero} es primo ${esPrimo(numero)}`);
