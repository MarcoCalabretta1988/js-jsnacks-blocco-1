// CHECK IF JS IS CONNECTED
console.log ('JS OK?');

// ! TRACCIA
/*
In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby,
 l’utente inserisce il suo nome tramite un input.comunicagli se può partecipare o no alla festa.
*/

//Creo array con nomi

const guestList = ['SERGIO' , 'MARCO' , 'MARIO' , 'PATRIZIO' , 'SARA' , 'NOEMI', 'FRANCESCA'];

//recuper il bottone

const button = document.getElementById('button');

//creo eventi a click del bottone

button.addEventListener('click' , function(){



//Recupero elementi e valore dal DOM
const guestValue = document.getElementById('name');
const result = document.getElementById ('result');

const guestName = guestValue.value.trim().toUpperCase();

//controllo se è in lista

let isValid = false ;

for (let i = 0 ; i < guestList.length && !isValid && isNaN(guestName); i++){
    if(guestList[i] === guestName){
        isValid = true;
    }
    console.log(isValid);
}

if (isValid) {
    result.innerText = ` Ciao ${guestName}! Benvenuto/a alla festa!`;
}

else{
    result.innerText = ` Gandalf: ${guestName} TU NON PUOI PASSAREEE!`;
}

});