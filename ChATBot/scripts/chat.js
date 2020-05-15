// process input text

const input = document.getElementById("text");
const output = document.getElementById("display");

// listen for Enter key pushed
input.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {

        // get user text
        let userText = escapeHtml(input.value);        
      
        // append text to the output
        output.innerHTML+="<span style='color:red'>You: </span>" +  userText + "<br>";
        // clear input
        input.value = "";

        // get response from bot
        let botResponse = getBotResponse(userText);

        // append bot response to output
        output.innerHTML+="<span style='color:blue'>Ch@ Bot: </span>" +  botResponse + "<br>"; 
        
        // scroll to bottom
        output.scrollTop = output.scrollHeight;
    }
});


function getBotResponse(userText) {

    // TODO: send to backend for response from chatter bot API

    // Dummy response for now
    return "Heya! Did you say \"" + userText + "\"? Sorry, I'm not smart enough to respond to that yet..."

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