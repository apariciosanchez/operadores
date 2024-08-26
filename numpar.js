

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});


readline.question('Teclea un número: ', numero => {
    numero = parseInt(numero);

    
    for (let i = 0; i < numero; i++) {
        if (i % 2 === 0) {
            console.log(i);
        }
    }


    readline.close();
});
