// process and output for terminal commands

const input = document.getElementById("command");
const output = document.getElementById("terminalOuput");

// listen for Enter key pushed
input.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      
      // process command 
      let returnVal = '<p>'+processCommand(input.value.trim())+'</p>';
      
      // set output
      output.innerHTML = returnVal;

      // scroll to bottom
      window.scrollTo(0,document.body.scrollHeight);
    }
});

// process commands
function processCommand(command){

    if (command.toUpperCase()=="HELP") {

        return `Command Summary:<br>
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
    return  "<iframe src=\"https://weather.com/weather/today/l/" + query + "\"style='height:500px;width:100%;'></iframe>"; 
}


 
