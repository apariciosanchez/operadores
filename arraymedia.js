
let numeros = [5, 9, 10, 12];
//Se inicializa la variable para la suma 
let suma =0
// esto esta bien, pero la guia consistia en poner en practica el ciclo FOR
//let suma = numeros.reduce((acumulador, valorActual) => acumulador + valorActual, 0);

//Bucle para suma todos los elementos del array
for (let i = 0; i < numeros.length; i++){
  suma += numeros[i];
}

let media = suma / numeros.length;

console.log(`La media es ${media}`);
