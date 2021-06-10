
var stringa = prompt('Inserisci una stringa:');

var capitalize = capitalize(stringa);
console.log(capitalize);

/* function */

function capitalize(x){

    var maiuscola = '';

    maiuscola = x[0].toUpperCase();

    var parola = x.substring(1).toLowerCase();

    return maiuscola + parola;
}