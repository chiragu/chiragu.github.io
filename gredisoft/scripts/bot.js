// Author: Chirag Uttamsingh
// Date: 11/22/2018
// JS for the frontend logic to record audio commands for the gredisoft bot

const button = document.getElementById("main_button");



// record the audio
try {

    // get speech recognition
    const SpeechRecognition = window.speechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.onstart = function() {
        console.log ("Voice recognition started");
    }

    recognition.onresult = function (event) {

        console.log(event);

        // return button color to green
        button.src="images/button_green.png";

        // transcript of what was spoken
        const transcript = event.results[0][0].transcript;

        // redirect voice search to google
        window.location.href  ='http://google.com/search?q='+transcript;
    }

    button.onclick = function() {
        button.src="images/button_orange.png";
        recognition.start();
    }
    
}
catch(e) {
    alert("Browser does not support voice recognition." )
}

