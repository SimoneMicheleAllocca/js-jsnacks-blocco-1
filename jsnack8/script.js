
let numeroUtente = prompt("Inserisci un numero di 4 cifre:");
let somma = 0;


    for (let i = 0; i < numeroUtente.length; i++) {
        let numero = parseInt(numeroUtente[i]);
        somma += numero;
    }

    console.log("La somma è:", somma);