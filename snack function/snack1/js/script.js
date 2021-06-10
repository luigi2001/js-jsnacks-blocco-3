
var numeri = [11,22,34,45,58,69,76,88,99,10];

var a = parseInt(prompt('inserisci il primo indice (A):' + numeri.length));

var b = parseInt(prompt('inserisci il secondo indice (B):' + numeri.length));


while(a > b || b > numeri.length){

    alert('Attenzione! indice A deve essere più piccolo di indice B oppure hai inserito un indice B maggiore');

    var a = parseInt(prompt('inserisci il primo indice (A):' + numeri.length));

    var b = parseInt(prompt('inserisci il secondo indice (B):' + numeri.length));

}

var risultato = nuovoArry(numeri,a,b);
console.log(risultato);





/* function */

function nuovoArry(arry,min,max){

    var nuovo = [];

    for(var i = min - 1; i < max; i++){
        nuovo.push(arry[i]);
    }

    return nuovo;
}

