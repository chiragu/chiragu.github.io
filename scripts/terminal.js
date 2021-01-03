// Processor for terminal commands

// set quote on title
const quoteContainer = document.getElementById("quote");
getQuote(quoteContainer);

// process and output for terminal commands

const input = document.getElementById("command");
const output = document.getElementById("terminalOuput");

// listen for Enter key pushed
input.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      
      // process command 
      let returnVal = '<p>'+processCommand(escapeHtml(input.value.trim()))+'</p>';
      
      // set output
      output.innerHTML = returnVal;

      // scroll to top of terminal
      window.location.href="#terminal";
    }
});

// process commands
function processCommand(command){

    if (command.toUpperCase()=="HELP") {

        return `Command Summary:
        <ul>
            <li>help : shows a list of possible commands</li>
            <li>time : shows your current time</li>
            <li>date : shows your current date</li>
            <li>weather *zip-code* : shows the weather for the given zip code</li>
            <li>wikipedia *topic* : shows information from Wikipedia on the requested topic</li>
        </ul>`;

    }
    else if (command.toUpperCase()=="TIME") {
        return "Current Time: " + new Date().toLocaleTimeString();
    }

    else if (command.toUpperCase()=="DATE") {
        return "Today's Date: " + new Date().toLocaleDateString();
    }
    else if (command.toUpperCase().replace(/ .*/, '') == "WIKIPEDIA") {
        return getWiki(command.slice(9,command.length).trim().split(" ").join("_"));
    }
    else if (command.toUpperCase().replace(/ .*/, '') == "WEATHER") {
        return getWeather(command.slice(7,command.length).trim());
    }
    else if (command.toUpperCase().replace(/ .*/, '') == "QUOTE") {
        getQuote(output);
    }
    else {

        return  "\"" + command + "\" is not recogonized as an internal or external command.<br><br>";

    }    
}

// get wikipedia
function getWiki(query) {
    return  "<iframe src=\"https://en.wikipedia.org/wiki/" + query + "\"style='height:500px;width:100%;'></iframe>";     
}

// get weather
function getWeather(query) {
    return  "<iframe src=\"https://www.weatherbug.com/weather-forecast/now/" + query + "\"style='height:500px;width:100%;'></iframe>"; 
}

// function to get a random quote using the programming quotes api
function getQuote(outputElement) {

    // new http request
    let request = new XMLHttpRequest();
 
    // set up request
    request.open("GET", "https://programming-quotes-api.herokuapp.com/quotes/random");

    // on return 
    request.onload = function() {

        // parse the JSON
        let returnedData = JSON.parse(request.responseText);


        // return the quote
        outputElement.innerHTML =  returnedData.en + "<br><br> ~ " + returnedData.author + " ~";
    }

    // send request
    request.send(); 

}

// escape html for security
function escapeHtml(unsafe) {
    return unsafe
         .replace(/&/g, "&amp;")
         .replace(/</g, "&lt;")
         .replace(/>/g, "&gt;")
         .replace(/"/g, "&quot;")
         .replace(/'/g, "&#039;");
 }

 // if window controls are clicked, return to help message
 const windowControls = document.getElementById("windowControls");
 windowControls.onclick = function() {

     // process command - hardcoded to help
     let returnVal = '<p>'+processCommand("help")+'</p>';
      
     // set output
     output.innerHTML = returnVal;

     // scroll to top of terminal
     window.location.href="#terminal";

 }


 
