//Escribe un código que muestre el mensaje "Hola, bienvenidos a la clase!" después de 3 segundos de haber ejecutado el programa.

/*function saludo() {
    console.log("hala, bienvenidos a la claase");
}
setTimeout(saludo,3000);*/

/* Crea un temporizador que haga una cuenta regresiva de 5 a 0, mostrando cada número en la consola cada segundo.
 Cuando llegue a 0, debe mostrar el mensaje "¡Tiempo terminado!" y detenerse.

 function cuentaRegresiva() {
    let contador = 5;
    function mostrarContador() {
        console.log(contador);
        contador--;

    
        if (contador >= 0) {
            setTimeout(mostrarContador, 1000);
        } else {
            console.log("¡Tiempo terminado!");
        }
    }
    mostrarContador();
}

cuentaRegresiva(); */

//Escribe un programa que muestre la fecha y hora actual en la consola cada segundo.

/*function mostrarFechaYHora() {
    const ahora = new Date();

    const fechaYHora = ahora.toLocaleString();

    console.log(fechaYHora);

    
}
setTimeout(mostrarFechaYHora,1000);*/

/*Simula una petición a un servidor que tarda 2 segundos en responder. Debe mostrar "Obteniendo datos..." inmediatamente,
 y después de 2 segundos, debe mostrar "Datos recibidos: [1, 2, 3, 4, 5]".*/

 /*function obtenerDatos() {
    console.log("Obteniendo datos...");

    function segundos() {
        console.log("Datos recibidos: [1, 2, 3, 4, 5]");
    }
    setTimeout(segundos, 2000);
}
setTimeout(obtenerDatos, 3000);*/

//Crea un programa que muestre "Ejecutando tarea..." cada segundo, pero que se detenga automáticamente después de 5 ejecuciones.

function ejecutarTarea() {
    let ejecuciones = 0;

    function mostrarMensaje() {
        ejecuciones++;
        console.log("Ejecutando tarea...");

        if (ejecuciones < 5) {
            setTimeout(mostrarMensaje, 1000);
        }
    }

    mostrarMensaje();
}
setTimeout(ejecutarTarea,2000);


