// Sets the date and time on the page

// constants for html elements that hold date and time
const dateElement = document.getElementById("date");
const timeElement = document.getElementById("time");

// get the current date
function getDate(date) {

    return date.toDateString();
}

// get the current time
function getTime(date) {
    return date.toLocaleTimeString();
}

// set the date and time 
function setDateTime() {
    
    let date = new Date();
    dateElement.innerText = getDate(date);
    timeElement.innerText = getTime(date);    
}

// update the date and time every minute
setDateTime();
setInterval(setDateTime, 1000);
