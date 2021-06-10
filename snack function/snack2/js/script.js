
var parola1 = prompt('inserisci una parola');

var parola2 = prompt('inserisci una seconda parola');

var verifica = lunghezzaParole(parola1,parola2);
console.log(verifica);









/* function */

function lunghezzaParole(x,y){
    if(x.length == y.length){
        return x + ' ' + y;
    }else if(x.length < y.length){
        return y;
    }else{
        return x;
    }
}