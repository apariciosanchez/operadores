// Mauricio Sanchez U20241028

const titulo = document.getElementById("titulo");

const btnCambiarTexto = document.getElementById("btnCambiarTexto");

const btnCambiarColor = document.getElementById("btnCambiarColor");

const btnCambiarAlineacion = document.getElementById("btnCambiarAlineacion");

const btnCrearTexto = document.getElementById("btnCrearTexto");

const btnBorrarTexto = document.getElementById("btnBorrarTexto");

let nuevoTexto; 

// Función para cambiar el texto del título
function cambiarTexto() {
  titulo.textContent = "Hola Mundo con JavaScript";
}

// Función para cambiar el color del texto del título a rojo
function cambiarColor() {
  titulo.style.color = "red";
}

// Función para cambiar la alineación del texto del título al centro
function cambiarAlineacion() {
  titulo.style.textAlign = "center";
}

// Función para crear un nuevo texto debajo del título
function crearTexto() {
  if (!nuevoTexto) { 
    nuevoTexto = document.createElement("p");
    nuevoTexto.textContent = "JavaScript permite crear páginas dinámicas";
    document.body.appendChild(nuevoTexto);
  }
}

// Función para borrar el texto creado
function borrarTexto() {
  if (nuevoTexto) { 
    document.body.removeChild(nuevoTexto);
    nuevoTexto = null;
  }
}

// Agregar eventos a los botones
btnCambiarTexto.addEventListener("click", cambiarTexto);
btnCambiarColor.addEventListener("click", cambiarColor);
btnCambiarAlineacion.addEventListener("click", cambiarAlineacion);
btnCrearTexto.addEventListener("click", crearTexto);
btnBorrarTexto.addEventListener("click", borrarTexto);
