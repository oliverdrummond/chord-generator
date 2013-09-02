//ACORDES MAIORES
var ACORDE_MAIOR = function (f) {
    oscillatorOne.frequency.value = f.TONICA;
    oscillatorTwo.frequency.value = f.TERCA_MAIOR;
    oscillatorThree.frequency.value = f.QUINTA_JUSTA;
    oscillatorFour.frequency.value = f.TONICA * 2;
};

var ACORDE_MAIOR_COM_SETIMA = function (f) {
    oscillatorOne.frequency.value = f.TONICA;
    oscillatorTwo.frequency.value = f.TERCA_MAIOR;
    oscillatorThree.frequency.value = f.QUINTA_JUSTA;
    oscillatorFour.frequency.value = f.SETIMA_MENOR;
};

var ACORDE_MAIOR_COM_SETIMA_MAIOR = function (f) {
    oscillatorOne.frequency.value = f.TONICA;
    oscillatorTwo.frequency.value = f.TERCA_MAIOR;
    oscillatorThree.frequency.value = f.QUINTA_JUSTA;
    oscillatorFour.frequency.value = f.SETIMA_MAIOR;
};

var ACORDE_MAIOR_COM_NONA = function () {
    oscillatorOne.frequency.value = f.TONICA;
    oscillatorTwo.frequency.value = f.TERCA_MAIOR;
    oscillatorThree.frequency.value = f.QUINTA_JUSTA;
    oscillatorFour.frequency.value = f.NONA_MAIOR;
};

var ACORDE_MAIOR_BAIXO_TERCA = function (f) {
    oscillatorOne.frequency.value = f.TONICA;
    oscillatorTwo.frequency.value = (f.TERCA_MAIOR)/2;
    oscillatorThree.frequency.value = f.QUINTA_JUSTA;
    oscillatorFour.frequency.value = f.TONICA * 2;
};

var ACORDE_MAIOR_BAIXO_QUINTA = function (f) {
    oscillatorOne.frequency.value = f.TONICA;
    oscillatorTwo.frequency.value = f.TERCA_MAIOR;
    oscillatorThree.frequency.value = (f.QUINTA_JUSTA)/2;
    oscillatorFour.frequency.value = f.TONICA * 2;
};

var ACORDE_MAIOR_BAIXO_NONA = function (f) {
    oscillatorOne.frequency.value = f.TONICA;
    oscillatorTwo.frequency.value = f.TERCA_MAIOR;
    oscillatorThree.frequency.value = f.QUINTA_JUSTA;
    oscillatorFour.frequency.value = (f.NONA_MAIOR)/2;
};

var ACORDE_MAIOR_BAIXO_SETIMA_MENOR = function (f) {
    oscillatorOne.frequency.value = f.TONICA;
    oscillatorTwo.frequency.value = f.TERCA_MAIOR;
    oscillatorThree.frequency.value = f.QUINTA_JUSTA;
    oscillatorFour.frequency.value = (f.SETIMA_MENOR)/2;
};

//ACORDES MENORES
var ACORDE_MENOR = function (f) {
    oscillatorOne.frequency.value = f.TONICA;
    oscillatorTwo.frequency.value = f.TERCA_MENOR;
    oscillatorThree.frequency.value = f.QUINTA_JUSTA;
    oscillatorFour.frequency.value = f.TONICA * 2;
};

var ACORDE_MENOR_COM_SETIMA = function (f) {
    oscillatorOne.frequency.value = f.TONICA;
    oscillatorTwo.frequency.value = f.TERCA_MENOR;
    oscillatorThree.frequency.value = f.QUINTA_JUSTA;
    oscillatorFour.frequency.value = f.SETIMA_MENOR;
};

var ACORDE_MENOR_BAIXO_TERCA = function (f) {
    oscillatorOne.frequency.value = f.TONICA;
    oscillatorTwo.frequency.value = (f.TERCA_MENOR)/2;
    oscillatorThree.frequency.value = f.QUINTA_JUSTA;
    oscillatorFour.frequency.value = f.TONICA * 2;
};

var ACORDE_MENOR_BAIXO_QUINTA = function (f) {
    oscillatorOne.frequency.value = f.TONICA;
    oscillatorTwo.frequency.value = f.TERCA_MENOR;
    oscillatorThree.frequency.value = (f.QUINTA_JUSTA)/2;
    oscillatorFour.frequency.value = f.TONICA * 2;
};

var ACORDE_MENOR_BAIXO_SETIMA_MENOR = function (f) {
    oscillatorOne.frequency.value = f.TONICA;
    oscillatorTwo.frequency.value = f.TERCA_MENOR;
    oscillatorThree.frequency.value = f.QUINTA_JUSTA;
    oscillatorFour.frequency.value = (f.SETIMA_MENOR)/2;
};

//PARA FICAR O MAIS FIEL POSSÍVEL PODEMOS FAZER UMAS INVERSÕES REAIS DE ACORDES DE VIOLAO, NESSE CASO PRECISARÍAMOS DE 6 OSCILADORES