
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});


readline.question('Teclea un número: ', numero => {
    numero = parseInt(numero);

    
    let suma = 0;


    for (let i = 1; i <= numero; i++) {
        suma += i;
    }
    console.log(`Los enteros de 0 a ${numero} suman ${suma}`);


    readline.close();
});
