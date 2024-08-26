
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});


readline.question('Teclea un número: ', numero => {
    numero = parseInt(numero);

    // Dibuja el triángulo rectángulo con asteriscos
    for (let i = 1; i <= numero; i++) {
        console.log("*".repeat(i));
    }

    
    readline.close();
});

