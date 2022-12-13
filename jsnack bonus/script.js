// LINK JS OK

console.log(' JS OK');


//! TRACCIA
/**
 L'utente inserisce un numero di 4 cifre in un input. Calcola la somma di tutte le cifre che compongono il numero e stampala in pagina. 
 */

// prendo Elementi dal dom

const button = document.getElementById('button');
const userNumber = document.getElementById('number');
const result = document.getElementById('result');


//Creo logica a evento click del bottone

button.addEventListener('click' , function(){

//prendo il valore inserito dall utente dal form

const numberToSum = userNumber.value.trim();


console.log(numberToSum);
console.log(numberToSum.lenght);

//validazione 

if (numberToSum.lenght < 4 || numberToSum.lenght > 4){
    result.innerText = ' Hai inserito un valore errato';
}
else{
    let sum = 0;
    for(let i = 0 ; i < numberToSum.lenght ; i++ ){
        sum += numberToSum[i];
    }
    result.innerText = ` La somma dei tuoi valori è: ${sum}`;
}



});
