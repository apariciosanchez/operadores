const prompt = require('prompt-sync')();


let producto = {
    precio: 0,
    descuento: 0,

    neto: function() {
        return this.precio - (this.precio * (this.descuento / 100));
    }
};

producto.precio = parseFloat(prompt("Ingresa el precio del producto: "));
producto.descuento = parseFloat(prompt("Ingresa el porcentaje del descuento: "));


let precioConDescuento = producto.neto();
console.log("El precio neto con descuento es: $" + precioConDescuento.torFixed(2));