/* 0scar Mauricio Sanchez u20241028 */
let categoriasDeGastos = [
    { categoria: "Renta", monto: 1000 },
    { categoria: "Comida", monto: 600 },
    { categoria: "Transporte", monto: 300 },
    { categoria: "Entretenimiento", monto: 150 }
];

function calcularTotalGastos(gastos) {
    let totalGastos = 0;
    for (let i = 0; i < gastos.length; i++) {
        totalGastos += gastos[i].monto;
    }
    return totalGastos;
}

let totalGastosInicial = calcularTotalGastos(categoriasDeGastos);
console.log("Total de gastos iniciales:", totalGastosInicial);

// Ingresos mensuales de la familia
let ingresos = 1000; 

let gastos = [
    { categoria: "Alquiler", monto: 1000 },
    { categoria: "Alimentos", monto: 100 },
    { categoria: "Transporte", monto: 300 },
    { categoria: "Entretenimiento", monto: 200 },
    { categoria: "Servicios públicos", monto: 150 }
];

let totalGastos = calcularTotalGastos(gastos);

let presupuestoRestante = ingresos - totalGastos;

console.log(" ingresos:", ingresos);
console.log(" gastos:", totalGastos);
console.log("restante:", presupuestoRestante);

if (presupuestoRestante > 0) {
    console.log("¡Tienes ahorros este mes!");
} else if (presupuestoRestante === 0) {
    console.log("Tu presupuesto está equilibrado.");
} else {
    console.log("has excedido tu presupuesto y debes $" + Math.abs(presupuestoRestante) + ".");
}
