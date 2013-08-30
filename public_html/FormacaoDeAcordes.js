//ACORDES MAIORES
var ACORDE_MAIOR = function (f) {
    oscillatorOne.frequency.value = f.TONICA;
    oscillatorTwo.frequency.value = f.TERCA_MAIOR;
    oscillatorThree.frequency.value = f.QUINTA_JUSTA;
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

//ACORDES MENORES
var ACORDE_MENOR = function (f) {
    oscillatorOne.frequency.value = f.TONICA;
    oscillatorTwo.frequency.value = f.TERCA_MENOR;
    oscillatorThree.frequency.value = f.QUINTA_JUSTA;
};

var ACORDE_MENOR_COM_SETIMA = function (f) {
    oscillatorOne.frequency.value = f.TONICA;
    oscillatorTwo.frequency.value = f.TERCA_MENOR;
    oscillatorThree.frequency.value = f.QUINTA_JUSTA;
    oscillatorFour.frequency.value = f.SETIMA_MENOR;
};

//PARA FICAR O MAIS FIEL POSSÍVEL PODEMOS FAZER UMAS INVERSÕES REAIS DE ACORDES DE VIOLAO, NESSE CASO PRECISARÍAMOS DE 6 OSCILADORES