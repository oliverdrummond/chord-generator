try {
    var contextClass = (window.AudioContext || window.webkitAudioContext || window.mozAudioContext || window.oAudioContext || window.msAudioContext);
    var context = new contextClass();
} catch (e) {
    alert('Infelizmente o seu navegador não é compatível com a Web Audio API, tente baixar o Google Chrome para poder utilizar nosso site');
}


var fazerBarulho = function() {
    //CRIAÇÃO DOS NODES
    var osciladores = {
        oscillatorOne : context.createOscillator(),
        oscillatorTwo : context.createOscillator(),
        oscillatorThree : context.createOscillator(),
        oscillatorFour : context.createOscillator()
    };
    var gainNode = context.createGain();

    //Conectando os osciladores na saída de áudio
    osciladores.oscillatorOne.connect(gainNode);
    osciladores.oscillatorTwo.connect(gainNode);
    osciladores.oscillatorThree.connect(gainNode);
    osciladores.oscillatorFour.connect(gainNode);
    gainNode.connect(context.destination);

    //Ligando os osciladores
    osciladores.oscillatorOne.noteOn(0);
    osciladores.oscillatorTwo.noteOn(0.1);
    osciladores.oscillatorThree.noteOn(0.2);
    osciladores.oscillatorFour.noteOn(0.3);

    //Desligando os osciladores
    osciladores.oscillatorOne.noteOff(1.5);
    osciladores.oscillatorTwo.noteOff(1.5);
    osciladores.oscillatorThree.noteOff(1.5);
    osciladores.oscillatorFour.noteOff(1.5);
    
    return osciladores;
}
