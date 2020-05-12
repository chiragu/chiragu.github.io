// global vars
var fever;
var cough;
var sob;

// main next click
document.getElementById("mainbutton").onclick = function () {
    // hide main div, show symptoms div
    document.getElementById("main").style.display = "none";
    document.getElementById("symptoms").style.display = "block";

}

// symptoms next click
document.getElementById("symptomsbutton").onclick = function () {
    // hide symptoms div, 
    // if none selected, show contacts div
    // if fever, show fever div
    // else show,  worse div
    document.getElementById("symptoms").style.display = "none";

    fever = document.getElementById("fever").checked;
    cough = document.getElementById("cough").checked;
    sob = document.getElementById("shortnessOfBreath").checked;

    if (!fever && !cough && !sob) {
        document.getElementById("contact").style.display = "block";
    }
    else if (fever) {
        document.getElementById("feverCard").style.display = "block";
    } 
    else {
        document.getElementById("worse").style.display = "block";
    } 

}

// fever button
document.getElementById("feverButton").onclick = function () {
    // hide fever div
    // if high fever, show emergency div
    // else show worse div
    document.getElementById("feverCard").style.display = "none";

    var highFever = document.getElementById("highFever").checked;
    var lowFever = document.getElementById("lowFever").checked;
    if (highFever) {
        document.getElementById("emergency").style.display = "block";
    }
    else if (lowFever) {
        document.getElementById("worse").style.display = "block";
    }
    else{
        alert("Please make a selection to continue.");
        document.getElementById("feverCard").style.display = "block";
    }
    
}

// worse button
document.getElementById("worseButton").onclick = function () {
    // hide worse div
    // if worse, show emergency div
    // else show breathing div
    document.getElementById("worse").style.display = "none";

    var yesWorse = document.getElementById("yesworse").checked;
    var noWorse = document.getElementById("noworse").checked;
    if (yesWorse) {
        document.getElementById("emergency").style.display = "block";
    }
    else if (noWorse) {
        document.getElementById("breathe").style.display = "block";
    }  
    else {
        alert("Please make a selection to continue.");
        document.getElementById("worse").style.display = "block";
    }  
}

// breathing button
document.getElementById("breatheButton").onclick = function () {
    // hide breathe div
    // if breatheFast, show emergency div
    // else show blood  div
    document.getElementById("breathe").style.display = "none";

    var yesFast = document.getElementById("yesfast").checked;
    var noFast = document.getElementById("nofast").checked;
    if (yesFast) {
        document.getElementById("emergency").style.display = "block";
    }
    else if (noFast) {
        document.getElementById("blood").style.display = "block";
    }   
    else {
        alert("Please make a selection to continue.");
        document.getElementById("breathe").style.display = "block";
    } 
}

// blood button
document.getElementById("bloodButton").onclick = function () {
    // hide blood div
    // if yesblood, show emergency div
    // else show contact div
    document.getElementById("blood").style.display = "none";

    var yesBlood = document.getElementById("yesblood").checked;
    var noBlood = document.getElementById("noblood").checked;
    if (yesBlood) {
        document.getElementById("emergency").style.display = "block";
    }
    else if (noBlood) {
        document.getElementById("contact").style.display = "block";
    }   
    else {
        alert("Please make a selection to continue.");
        document.getElementById("blood").style.display = "block";
    } 
}

// contact button
document.getElementById("contactButton").onclick = function () {
    // if  no contact selection -> alert and block
    // else -> 

    // check symptoms
    // if symptoms && contact -> avoidContact
    // if contact && ! symptoms -> quarantine
    // if !contact && symptoms -> monitor
    // if !contact && !symptoms -> guidelines

    var yesContact = document.getElementById("yescontact").checked;
    var noContact = document.getElementById("nocontact").checked;
    if (!yesContact && !noContact) {
        alert("Please make a selection to continue.");
    }

    else {
        // hide contact div
        document.getElementById("contact").style.display = "none";

        var contact = yesContact;
        var symptoms = false;
        if (fever || cough || sob) {
            symptoms = true;
        }

        if (symptoms && contact){
            document.getElementById("avoidContact").style.display = "block";
        }
        else if(contact && !symptoms ) {
            document.getElementById("quarantine").style.display = "block";
        }
        else if (!contact && symptoms) {
            document.getElementById("monitor").style.display = "block";
        }
        else if(!contact && !symptoms) {
            document.getElementById("guidelines").style.display = "block";
        }

    }
    
}

// selecting none of the above as symptoms, unchecks the others
document.getElementById("none").onclick = function () {
    if (document.getElementById("none").checked) {

        document.getElementById("fever").checked = false;
        document.getElementById("cough").checked = false;
        document.getElementById("shortnessOfBreath").checked = false;
    }
}
document.getElementById("fever").onclick = function () {
    document.getElementById("none").checked = false;
}
document.getElementById("cough").onclick = function () {
    document.getElementById("none").checked = false;
}
document.getElementById("shortnessOfBreath").onclick = function () {
    document.getElementById("none").checked = false;
}



