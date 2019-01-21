var source;
var fft;
const flock = [];
console.log("i am alive");
function setup() {
    var audioCtx = getAudioContext();
    var streamEl = document.getElementById('my-stream');
    var source = audioCtx.createMediaElementSource(streamEl);
    source.connect(p5.soundOut);
    fft = new p5.FFT(0, 1024);
    source.connect(audioCtx.destination);
    createCanvas(windowWidth, windowHeight);
}

function draw() {
    background(0);
    stroke(0, 87, 87);
    fill(0);
    var spectrum = fft.analyze();
    for(var i = 0; i < spectrum.length; i++){
        index = map(i, 0, 1024, 0, 1);
        strokeWeight(15 * index);
        ampFreq = map(spectrum[i], 0, 255, 0, 1);
        ellipse(width * index,random(height),100 * ampFreq, 100 * ampFreq);
    }
}

function startNoise() {
    var streamEl = document.getElementById('my-stream');
    var intro = document.getElementById('intro');
    intro.style.display = "none";
    streamEl.play();
}
