try {
    var contextClass = (window.AudioContext || window.webkitAudioContext || window.mozAudioContext || window.oAudioContext || window.msAudioContext);
    var context = new contextClass();
} catch (e) {
    alert('Infelizmente o seu navegador não é compatível com a Web Audio API, tente baixar o Google Chrome para poder utilizar nosso site');
}

//CRIAÇÃO DOS NODES
var oscillatorOne = context.createOscillator();
var oscillatorTwo = context.createOscillator();
var oscillatorThree = context.createOscillator();
var gainNode = context.createGain();

oscillatorOne.frequency.value = TONICA;
oscillatorTwo.frequency.value = TERCA_MENOR;
oscillatorThree.frequency.value = QUINTA_JUSTA;

//Conectando os osciladores na saída de áudio
oscillatorOne.connect(gainNode);
oscillatorTwo.connect(gainNode);
oscillatorThree.connect(gainNode);
gainNode.connect(context.destination);

//Ligando os osciladores
oscillatorOne.noteOn(0);
oscillatorTwo.noteOn(0.1);
oscillatorThree.noteOn(0.2);

//Desligando os osciladores
oscillatorOne.noteOff(1.5);
oscillatorTwo.noteOff(1.5);
oscillatorThree.noteOff(1.5);

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