
var acorde = prompt('Entre com o acorde');
acorde = acorde.replace('#','_SUSTENIDO');
acorde = acorde.toUpperCase()
var frequenciaDeReferencia = intervalosPara(NOTES_FREQUENCY[acorde]);

fazerBarulho();
ACORDE_MAIOR(frequenciaDeReferencia);

document.getElementById('volumeOscilador').addEventListener('change', function () {
    gainNode.gain.value = this.value;
});

function quantosSemitons() {
    var NOTES = {0: "A", 1: "A#", 2: "B", 3: "C", 4: "C#", 5: "D", 6: "D#", 7: "E", 8: "F", 9: "F#", 10: "G", 11: "G#"};
    var semitons = (12 * ((log10(oscillatorOne.frequency.value)) / 0.3010)) - 105.376;
    semitons = Math.round(semitons);
    if (semitons > 12) {
        semitons = semitons % 12;
    } else if (semitons < 0) {
        semitons = 12 + semitons;
    }
    for (var i = 0; i<= 11 ; i++) {
        if (i === semitons) {
            campoNotaOscilador.value = NOTES[i];
            break;
        } 
    }
}

function log10(value) {
    return Math.log(value) / Math.LN10;
}