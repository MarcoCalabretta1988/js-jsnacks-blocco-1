// CHECK LINK JS
console.log('JS OK');


// ! TRACCIA

/*Il software deve chiedere per 10 volte all’utente di inserire un numero. (qui potete usare un prompt).
 Il programma stampa la somma di tutti i numeri inseriti.
 */

 //  Prendo elemento dal Dom

 const result = document.getElementById ('result');

 // Creo ciclo con richiesta numero all'utente e somma dello stesso

// Variabili somma e flag
 let sum = 0;
 let isValid = true;

 for (let i=0 ; i < 10 && isValid ; i++){
    const userValue = parseInt(prompt('Inserisci un numero'));
    if (isNaN(userValue) || userValue < 0 ){
        alert('hai inserito un valore errato riprova');
        isValid = false;
    }
    else{
        sum += userValue
    }

 }

 //Stampo in pagina solo se è un tipo di valore congruo

 if (isValid) result.innerText = `La somma dei tuoi valori è: ${sum}`;