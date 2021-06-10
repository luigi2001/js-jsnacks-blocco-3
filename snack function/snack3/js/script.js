
var numeri = [1,2,3];

var lettere = ['a','b','c'];

var lettereNumeri = [];

var intersecamento = arryIntersecati(lettere,numeri,lettereNumeri);
console.log(intersecamento);






/* function */

function arryIntersecati(arry1,arry2,arry3){
    for(var i = 0; i < 3; i++){
        arry3.push(arry1[i]);
        arry3.push(arry2[i]);
    }

    return arry3;
}
