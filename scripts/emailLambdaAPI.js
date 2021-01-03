function submitToAPI(e) {

    // prevent default redirect
    e.preventDefault();

    // REST Endpoint
    var URL = "https://1yppsnty00.execute-api.us-east-1.amazonaws.com/Prod/contact-us";

    
    // Input validation
    var Namere = /[A-Za-z]{1}[A-Za-z]/;
    if (!Namere.test($("#name").val())) {
                alert ("Name can not less than 2 characters");
        return;
    }
    if ($("#email").val()=="") {
        alert ("Please enter your email");
        return;
    }

    var reeamil = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,6})?$/;
    if (!reeamil.test($("#email").val())) {
        alert ("Please enter valid email address");
        return;
    }

    // Create JSON Object with data from contact form
    var name = $("#name").val();
    var email = $("#email").val();
    var message = $("#message").val();
    var data = JSON.stringify({name: name, email: email, message: message});

    // Send data to REST Endpoint to Email

    // configure a request
    const xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
             // clear form and show a success message
            console.log(xhr.responseText);
            alert("Your message has been sent. Thank you!");
            document.getElementById("contact-form").reset();
            location.reload();
        }

        else  if (this.readyState == 4 && this.status != 200) {
             // show an error message
            var errorMessage = this.status + ': ' + this.statusText;
            alert("Email Sending Failed\nError Code: " + errorMessage);

        }
    };

    xhr.open('POST', URL);
    xhr.setRequestHeader('Content-Type', 'application/json');

    // send request
    xhr.send(data);

  }
