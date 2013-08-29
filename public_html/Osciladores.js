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
var oscillatorFour = context.createOscillator();
var gainNode = context.createGain();
//
//oscillatorOne.frequency.value = TONICA;
//oscillatorTwo.frequency.value = TERCA_MENOR;
//oscillatorThree.frequency.value = QUINTA_JUSTA;

//Conectando os osciladores na saída de áudio
oscillatorOne.connect(gainNode);
oscillatorTwo.connect(gainNode);
oscillatorThree.connect(gainNode);
oscillatorFour.connect(gainNode);
gainNode.connect(context.destination);

//Ligando os osciladores
oscillatorOne.noteOn(0);
oscillatorTwo.noteOn(0.1);
oscillatorThree.noteOn(0.2);
oscillatorFour.noteOn(0.3);

//Desligando os osciladores
oscillatorOne.noteOff(1.5);
oscillatorTwo.noteOff(1.5);
oscillatorThree.noteOff(1.5);
oscillatorFour.noteOff(1.5);
