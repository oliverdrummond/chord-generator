//ACORDES MAIORES
var ACORDE_MAIOR = function () {
    oscillatorOne.frequency.value = TONICA;
    oscillatorTwo.frequency.value = TERCA_MAIOR;
    oscillatorThree.frequency.value = QUINTA_JUSTA;
};

var ACORDE_MAIOR_COM_SETIMA = function () {
    oscillatorOne.frequency.value = TONICA;
    oscillatorTwo.frequency.value = TERCA_MAIOR;
    oscillatorThree.frequency.value = QUINTA_JUSTA;
    oscillatorFour.frequency.value = SETIMA_MENOR;
};

var ACORDE_MAIOR_COM_SETIMA_MAIOR = function () {
    oscillatorOne.frequency.value = TONICA;
    oscillatorTwo.frequency.value = TERCA_MAIOR;
    oscillatorThree.frequency.value = QUINTA_JUSTA;
    oscillatorFour.frequency.value = SETIMA_MAIOR;
};

//ACORDES MENORES
var ACORDE_MENOR = function () {
    oscillatorOne.frequency.value = TONICA;
    oscillatorTwo.frequency.value = TERCA_MENOR;
    oscillatorThree.frequency.value = QUINTA_JUSTA;
};

var ACORDE_MENOR_COM_SETIMA = function () {
    oscillatorOne.frequency.value = TONICA;
    oscillatorTwo.frequency.value = TERCA_MENOR;
    oscillatorThree.frequency.value = QUINTA_JUSTA;
    oscillatorFour.frequency.value = SETIMA_MENOR;
};

//PARA FICAR O MAIS FIEL POSSÍVEL PODEMOS FAZER UMAS INVERSÕES REAIS DE ACORDES DE VIOLAO, NESSE CASO PRECISARÍAMOS DE 6 OSCILADORES