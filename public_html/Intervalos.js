
var intervalosPara = function(frequenciaDeReferencia) {
    return {
        TONICA : frequenciaDeReferencia,
        SEGUNDA_MENOR : frequenciaDeReferencia * (Math.pow(2, 1 / 12)),
        SEGUNDA_MAIOR : frequenciaDeReferencia * (Math.pow(2, 2 / 12)),
        TERCA_MENOR : frequenciaDeReferencia * (Math.pow(2, 3 / 12)),
        TERCA_MAIOR : frequenciaDeReferencia * (Math.pow(2, 4 / 12)),
        QUARTA_JUSTA : frequenciaDeReferencia * (Math.pow(2, 5 / 12)),
        QUINTA_DIMINUTA : frequenciaDeReferencia * (Math.pow(2, 6 / 12)),
        QUINTA_JUSTA : frequenciaDeReferencia * (Math.pow(2, 7 / 12)),
        SEXTA_MENOR : frequenciaDeReferencia * (Math.pow(2, 8 / 12)),
        SEXTA_MAIOR : frequenciaDeReferencia * (Math.pow(2, 9 / 12)),
        SETIMA_MENOR : frequenciaDeReferencia * (Math.pow(2, 10 / 12)),
        SETIMA_MAIOR : frequenciaDeReferencia * (Math.pow(2, 11 / 12)),
        OITAVA : frequenciaDeReferencia * (Math.pow(2, 12 / 12)),
        NONA_MENOR : (2*frequenciaDeReferencia) * (Math.pow(2, 1 / 12)),
        NONA_MAIOR : (2*frequenciaDeReferencia) * (Math.pow(2, 2 / 12)),
    }    
}



