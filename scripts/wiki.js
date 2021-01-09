// process input text

const wiki_input = document.getElementById("chat-text");
const wiki_output = document.getElementById("chat-display");

// listen for Enter key pushed
wiki_input.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {

        sendBotText();
    }
});

function sendBotText() {

    // get user text
    let userText = escapeHtml(wiki_input.value);  
    
    if (userText.trim() == "") {
        return;
    }
      
    // append text to the output
    wiki_output.innerHTML+="<div class='chat-container'><img class='left' alt='Human Avatar' style='width:100%;'><p>" +  userText + "</p></div>";

    // add image
     var humanImages = document.getElementsByClassName("left");
     humanImages[humanImages.length - 1].src= "/images/blank_profile.png";


    // clear input
    wiki_input.value = "";

    // get response from bot
    getBotResponse(userText);
}


function getBotResponse(userText) {

    // Send to backend for response from Wikimedia API
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == XMLHttpRequest.DONE) {   // XMLHttpRequest.DONE == 4
           if (xmlhttp.status == 200) {

            // append bot response to output
            wiki_output.innerHTML+="<div class='chat-container chat-darker'><img alt='Robot Avatar' class='right' style='width:100%;'><p>" +  xmlhttp.responseText + "</p></div>";        
            
           }
           else {
                return "<div class='chat-container chat-darker'><img alt='Robot Avatar' class='right' style='width:90%;'><p>Error connecting to server: Code " + xmlhttp.status + "</p></div>"; 
           }

           // scroll to bottom
           wiki_output.scrollTop = wiki_output.scrollHeight;

           // update image
           var botImages = document.getElementsByClassName("right");
           botImages[botImages.length - 1].src= "/images/wiki_logo.png";
        }
    };

    xmlhttp.open("GET", "https://www.chiragu.ml/wikibot/wiki/?query=" + userText, true);
    xmlhttp.send();

    // scroll to bottom
    wiki_output.scrollTop = wiki_output.scrollHeight;
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