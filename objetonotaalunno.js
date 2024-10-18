
let alumno = {
    nombre: "mauricio",
    calificaciones: {
        ingles: 95,
        programacion: 75,
        matematica: 80
    }
}
let totalCalificaciones = alumno.calificaciones.ingles + alumno.calificaciones.programacion + alumno.calificaciones.matematica;
let promedio = totalCalificaciones / 3;

console.log("Nombre del alumno: " + alumno.nombre);
console.log("Promedio de calificaciones: " + promedio.toFixed(2));
