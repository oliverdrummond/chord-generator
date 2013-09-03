
var re = {
    ACORDE_MAIOR : "^[A-G]$",
    ACORDE_MAIOR_COM_SETIMA : "^[A-G]7$",
    ACORDE_MAIOR_COM_SETIMA_MAIOR : "^[A-G]7M$",
    ACORDE_MAIOR_COM_NONA : "^[A-G]9$",
    ACORDE_MAIOR_INVERTIDO : "^[A-G]\/[A-G]$",
    ACORDE_MENOR : "^[A-G]m$",
    ACORDE_MENOR_COM_SETIMA : "^[A-G]m7$",
    ACORDE_MENOR_INVERTIDO : "^[A-G]m\/[A-G]$"
}


var acordes = {};
    
acordes[re['ACORDE_MAIOR']] = function (f) {
    oscillatorOne.frequency.value = f.TONICA;
    oscillatorTwo.frequency.value = f.TERCA_MAIOR;
    oscillatorThree.frequency.value = f.QUINTA_JUSTA;
    oscillatorFour.frequency.value = f.TONICA * 2;
},

acordes[re['ACORDE_MAIOR_COM_SETIMA']] = function (f) {
    oscillatorOne.frequency.value = f.TONICA;
    oscillatorTwo.frequency.value = f.TERCA_MAIOR;
    oscillatorThree.frequency.value = f.QUINTA_JUSTA;
    oscillatorFour.frequency.value = f.SETIMA_MENOR;
},

acordes[re['ACORDE_MAIOR_COM_SETIMA_MAIOR']] = function (f) {
    oscillatorOne.frequency.value = f.TONICA;
    oscillatorTwo.frequency.value = f.TERCA_MAIOR;
    oscillatorThree.frequency.value = f.QUINTA_JUSTA;
    oscillatorFour.frequency.value = f.SETIMA_MAIOR;
},

acordes[re['ACORDE_MAIOR_COM_NONA']] = function () {
    oscillatorOne.frequency.value = f.TONICA;
    oscillatorTwo.frequency.value = f.TERCA_MAIOR;
    oscillatorThree.frequency.value = f.QUINTA_JUSTA;
    oscillatorFour.frequency.value = f.NONA_MAIOR;
},

acordes[re['ACORDE_MAIOR_BAIXO_TERCA']] = function (f) {
    oscillatorOne.frequency.value = f.TONICA;
    oscillatorTwo.frequency.value = (f.TERCA_MAIOR)/2;
    oscillatorThree.frequency.value = f.QUINTA_JUSTA;
    oscillatorFour.frequency.value = f.TONICA * 2;
},

acordes[re['ACORDE_MAIOR_BAIXO_QUINTA']] = function (f) {
    oscillatorOne.frequency.value = f.TONICA;
    oscillatorTwo.frequency.value = f.TERCA_MAIOR;
    oscillatorThree.frequency.value = (f.QUINTA_JUSTA)/2;
    oscillatorFour.frequency.value = f.TONICA * 2;
},

acordes[re['ACORDE_MAIOR_BAIXO_NONA']] = function (f) {
    oscillatorOne.frequency.value = f.TONICA;
    oscillatorTwo.frequency.value = f.TERCA_MAIOR;
    oscillatorThree.frequency.value = f.QUINTA_JUSTA;
    oscillatorFour.frequency.value = (f.NONA_MAIOR)/2;
},

acordes[re['ACORDE_MAIOR_BAIXO_SETIMA_MENOR']] = function (f) {
    oscillatorOne.frequency.value = (f.TONICA)*2;
    oscillatorTwo.frequency.value = f.TERCA_MAIOR;
    oscillatorThree.frequency.value = f.QUINTA_JUSTA;
    oscillatorFour.frequency.value = (f.SETIMA_MENOR)/2;
},

acordes[re['ACORDE_MAIOR_BAIXO_SETIMA_MAIOR']] = function (f) {
    oscillatorOne.frequency.value = (f.TONICA)*2;
    oscillatorTwo.frequency.value = f.TERCA_MAIOR;
    oscillatorThree.frequency.value = f.QUINTA_JUSTA;
    oscillatorFour.frequency.value = (f.SETIMA_MAIOR)/2;
},


//ACORDES MENORES
acordes[re['ACORDE_MENOR']] = function (f) {
    oscillatorOne.frequency.value = f.TONICA;
    oscillatorTwo.frequency.value = f.TERCA_MENOR;
    oscillatorThree.frequency.value = f.QUINTA_JUSTA;
    oscillatorFour.frequency.value = f.TONICA * 2;
},

acordes[re['ACORDE_MENOR_COM_SETIMA']] = function (f) {
    oscillatorOne.frequency.value = f.TONICA;
    oscillatorTwo.frequency.value = f.TERCA_MENOR;
    oscillatorThree.frequency.value = f.QUINTA_JUSTA;
    oscillatorFour.frequency.value = f.SETIMA_MENOR;
},

acordes[re['ACORDE_MENOR_BAIXO_TERCA']] = function (f) {
    oscillatorOne.frequency.value = f.TONICA;
    oscillatorTwo.frequency.value = (f.TERCA_MENOR)/2;
    oscillatorThree.frequency.value = f.QUINTA_JUSTA;
    oscillatorFour.frequency.value = f.TONICA * 2;
},

acordes[re['ACORDE_MENOR_BAIXO_QUINTA']] = function (f) {
    oscillatorOne.frequency.value = f.TONICA;
    oscillatorTwo.frequency.value = f.TERCA_MENOR;
    oscillatorThree.frequency.value = (f.QUINTA_JUSTA)/2;
    oscillatorFour.frequency.value = f.TONICA * 2;
},

acordes[re['ACORDE_MENOR_BAIXO_SETIMA_MENOR']] = function (f) {
    oscillatorOne.frequency.value = (f.TONICA)*2;
    oscillatorTwo.frequency.value = f.TERCA_MENOR;
    oscillatorThree.frequency.value = f.QUINTA_JUSTA;
    oscillatorFour.frequency.value = (f.SETIMA_MENOR)/2;
}



//PARA FICAR O MAIS FIEL POSSÍVEL PODEMOS FAZER UMAS INVERSÕES REAIS DE ACORDES DE VIOLAO, NESSE CASO PRECISARÍAMOS DE 6 OSCILADORES