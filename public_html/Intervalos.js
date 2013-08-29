var frequenciaDeReferencia = NOTES_FREQUENCY.A;

//DEFINIÇÃO DOS INTERVALOS SIMPLES
var TONICA = frequenciaDeReferencia;
var SEGUNDA_MENOR = frequenciaDeReferencia * (Math.pow(2, 1 / 12));
var SEGUNDA_MAIOR = frequenciaDeReferencia * (Math.pow(2, 2 / 12));
var TERCA_MENOR = frequenciaDeReferencia * (Math.pow(2, 3 / 12));
var TERCA_MAIOR = frequenciaDeReferencia * (Math.pow(2, 4 / 12));
var QUARTA_JUSTA = frequenciaDeReferencia * (Math.pow(2, 5 / 12));
var QUINTA_DIMINUTA = frequenciaDeReferencia * (Math.pow(2, 6 / 12));
var QUINTA_JUSTA = frequenciaDeReferencia * (Math.pow(2, 7 / 12));
var SEXTA_MENOR = frequenciaDeReferencia * (Math.pow(2, 8 / 12));
var SEXTA_MAIOR = frequenciaDeReferencia * (Math.pow(2, 9 / 12));
var SETIMA_MENOR = frequenciaDeReferencia * (Math.pow(2, 10 / 12));
var SETIMA_MAIOR = frequenciaDeReferencia * (Math.pow(2, 11 / 12));
var OITAVA = frequenciaDeReferencia * (Math.pow(2, 12 / 12));

//alert(TERCA_MENOR);
//DEFINIÇÃO DOS INTERVALOS COMPOSTOS
var NONA_MENOR = (2*frequenciaDeReferencia) * (Math.pow(2, 1 / 12));
var NONA_MAIOR = (2*frequenciaDeReferencia) * (Math.pow(2, 2 / 12));