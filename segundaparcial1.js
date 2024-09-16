 /* Oscar Mauricio Sanchez u20241028 */

 let peliculas = [
    { titulo: "Dragon Ball Z", genero: "Anime" },
    { titulo: "La Roca", genero: "Acción" },
    { titulo: "Dos Policías Rebeldes", genero: "Comedia" },
    { titulo: "El Titanic", genero: "Romance" },
    { titulo: "Matrix", genero: "Ciencia Ficción" }
];

let generoDeseado = "ciencia ficcion";

let peliculaEncontrada = false;
for (let indice = 0; indice < peliculas.length; indice++) {
    if (peliculas[indice].genero.toLowerCase().includes(generoDeseado.toLowerCase())) {
        console.log("Película encontrada: " + peliculas[indice].titulo);
        peliculaEncontrada = true;
    }
}

if (peliculaEncontrada) {
    console.log("Has elegido una película del género: " + generoDeseado);
} else {
    console.log("No se encontró ninguna película del género: " + generoDeseado);
}
