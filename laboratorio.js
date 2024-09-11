/* primer laboratorio*/ 
/*nombre. oscar mauricio sanchez aparicio U20241028*/
let camisetas = 80;
let pantalones = 150;
let zapatos = 90;

let totalProductos = camisetas + pantalones + zapatos;

console.log("Total de productos en el inventario: " + totalProductos);

if (camisetas < 100) {
    console.log("Es necesario reponer camisetas, solo hay en existencia: " + camisetas);

} if (pantalones < 100) {
    console.log("Es necesario reponer pantalones,  solo hay en existencia: " + pantalones);

} if (zapatos < 100) {
    console.log("Es necesario reponer zapatos,  solo hay en existencia: " + zapatos);
} else {
    console.log("No es necesario reponer ningún producto.");
}
