x = 0;
y = 0;
draw_circle = "";
draw_rect = "";

var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition(); 

function start()
{
    document.getElementById("status").innerHTML = "System is listening please speak";
    recognition.start();
}

recognition.onresult = function(event) {

    console.log(event);
}

function setup() {
    canvas = createCanvas(900,600);
}

function draw() {
    if(draw_circle == "set")
    {
        radius = Math.floor(Math.random() * 100);
        circle(x, y, radius);
        document.getElementById("status").innerHTML = "Circle is drawn";
        draw_circle = "";
    }
}