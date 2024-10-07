/* segundo laboratorio u20241028 */

const notas = [80, 90, 70, 90, 65]; 
const nombre = "Mauricio"; 


function calcularPromedio(notasArray) {
    let suma = 0;
    
    // Sumar todas las notas
    for (let i = 0; i < notasArray.length; i++) {
        suma += notasArray[i];
    }
    
    const promedio = suma / notasArray.length;
    
    return promedio;
}


const promedioFinal = calcularPromedio(notas);
console.log("El promedio de las notas de " + nombre + " es: " + promedioFinal.toFixed(2));
